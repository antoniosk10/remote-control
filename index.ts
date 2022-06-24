import { pipeline, Transform } from "stream";
import { createWebSocketStream, WebSocketServer } from "ws";
import { httpServer } from "./src/http_server/index";
import { response } from "./src/response";

const HTTP_PORT = 3000;

console.log(`Start static http server on the http://localhost:${HTTP_PORT}`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("WebSocket has been connected!");
  const duplex = createWebSocketStream(ws, {
    decodeStrings: false,
    encoding: "utf8",
  });
  const actionStream = new Transform({
    decodeStrings: false,
    encoding: "utf8",
  });
  actionStream._transform = (chunk, _, callback) => {
    console.log(`<- ${chunk}`);
    response(chunk)
      .then((res) => {
        callback(null, `${res}`);
      })
      .catch((err) => console.log(err));
  };

  pipeline(duplex, actionStream, duplex, (err) => {
    if (err) {
      console.error("Pipeline failed.", err);
    }
  });

  ws.on("close", () => {
    console.log("WebSocket has been closed!");
  });
});

wss.on("close", () => {
  console.log("WebSocketServer has been closed!");
});

wss.on("headers", (header) => {
  console.log(header);
});

process.on("SIGINT", () => {
  console.log("WebSocketServer will be close!");
  wss.close();
  process.exit();
});
