import { parseData } from "./utils/parseData";
import { ControllerType } from "./types";
import { controller } from "./controller";

export const response = async (data: string) => {
  const [command, param1, param2] = parseData(data);

  const response = await controller[command as keyof ControllerType](
    param1,
    param2
  );
  return response;
};
