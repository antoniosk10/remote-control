import robot from "robotjs";
import { mouseMove } from "./mouseMove";

export const drawFigure = (figure: string, width: string, height?: string) => {
  switch (figure) {
    case "square": {
      robot.mouseToggle("down");
      mouseMove("right", width);
      mouseMove("down", width);
      mouseMove("left", width);
      mouseMove("up", width);
      break;
    }
    case "rectangle": {
      robot.mouseToggle("down");
      mouseMove("right", width);
      mouseMove("down", height as string);
      mouseMove("left", width);
      mouseMove("up", height as string);
      break;
    }
    case "circle": {
      const mousePos = robot.getMousePos();
      const radius = +width / 2;
      for (let i = 0; i <= Math.PI * 2; i += 0.01) {
        const x = mousePos.x + radius * Math.cos(i);
        const y = mousePos.y + radius * Math.sin(i);

        robot.dragMouse(x, y);
        if (i === 0) robot.mouseToggle("down");
      }
    }
  }
  robot.mouseToggle("up");
  return `draw_${figure}`;
};
