import Jimp from "jimp";
import { httpServer } from "./src/http_server/index.js";
import robot from "robotjs";
import { WebSocketServer } from "ws";
import controller from "./src/controller.js";
import { parseData } from "./src/utils/parseData.js";

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    const dataString = data.toString();
    console.log(dataString);
    const [command, param1, param2] = parseData(dataString);
    const response = controller[command](param1, param2);
    ws.send(response);
  });
});
