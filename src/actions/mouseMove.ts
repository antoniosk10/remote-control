import robot from "robotjs";

export const mouseMove = (direction: string, offset: string) => {
  const currentPosition = robot.getMousePos();
  const offsetNumber = +offset;

  switch (direction) {
    case "left": {
      robot.moveMouseSmooth(
        currentPosition.x - offsetNumber,
        currentPosition.y
      );
      break;
    }
    case "right": {
      robot.moveMouseSmooth(
        currentPosition.x + offsetNumber,
        currentPosition.y
      );
      break;
    }
    case "up": {
      robot.moveMouseSmooth(
        currentPosition.x,
        currentPosition.y - offsetNumber
      );
      break;
    }
    case "down": {
      robot.moveMouseSmooth(
        currentPosition.x,
        currentPosition.y + offsetNumber
      );
      break;
    }
  }
  return `mouse_${direction} ${offset}`;
};
