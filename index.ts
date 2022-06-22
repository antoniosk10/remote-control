import { createWebSocketStream, WebSocketServer } from "ws";
import { controller } from "./src/controller";
import { httpServer } from "./src/http_server/index";
import { ControllerType } from "./src/types";
import { parseData } from "./src/utils/parseData";

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("WebSocket has been connected!");
  const duplex = createWebSocketStream(ws, {
    decodeStrings: false,
    encoding: "utf8",
  });
  ws.on("message", async (data) => {
    try {
      const dataString = data.toString();
      const [command, param1, param2] = parseData(dataString);

      const response = await controller[command as keyof ControllerType](
        param1,
        param2
      );
      duplex.write(response);
    } catch (err) {
      console.log(err);
    }
  });
  ws.on("close", () => {
    console.log("WebSocket has been closed!");
  });
});

wss.on("close", () => {
  console.log("WebSocketServer has been closed!");
});

process.on("SIGINT", () => {
  console.log("WebSocketServer will be close!");
  wss.close();
  process.exit();
});
