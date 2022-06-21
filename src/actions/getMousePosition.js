import robot from "robotjs";

export const getMousePosition = () => {
  const { x, y } = robot.getMousePos();
  return `mouse_position ${x},${y}`;
};
