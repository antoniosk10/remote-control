import robot from "robotjs";

export const getMousePosition = () => {
  const { x, y } = robot.getMousePos();
  console.log(`-> mouse_position ${x}px, ${y}px`);
  return `mouse_position ${x},${y}`;
};
