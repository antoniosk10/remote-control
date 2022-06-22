import { mouseMove } from "./actions/mouseMove.js";
import { getMousePosition } from "./actions/getMousePosition.js";
import { drawFigure } from "./actions/drawFigure.js";
import { printScreen } from "./actions/printScreen.js";

export default {
  mouse_left: (offset) => mouseMove("left", offset),
  mouse_right: (offset) => mouseMove("right", offset),
  mouse_up: (offset) => mouseMove("up", offset),
  mouse_down: (offset) => mouseMove("down", offset),
  mouse_position: getMousePosition,
  draw_square: (...props) => drawFigure("square", ...props),
  draw_rectangle: (...props) => drawFigure("rectangle", ...props),
  draw_circle: (...props) => drawFigure("circle", ...props),
  prnt_scrn: printScreen,
};
