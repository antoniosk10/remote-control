import { drawFigure } from "./actions/drawFigure";
import { getMousePosition } from "./actions/getMousePosition";
import { mouseMove } from "./actions/mouseMove";
import { printScreen } from "./actions/printScreen";
import { ControllerType } from "./types";

//TODO: import index

export const controller: ControllerType = {
  mouse_left: (offset) => mouseMove("left", offset),
  mouse_right: (offset) => mouseMove("right", offset),
  mouse_up: (offset) => mouseMove("up", offset),
  mouse_down: (offset) => mouseMove("down", offset),
  mouse_position: getMousePosition,
  draw_square: (width) => drawFigure("square", width),
  draw_rectangle: (width, height) => drawFigure("rectangle", width, height),
  draw_circle: (width) => drawFigure("circle", width),
  prnt_scrn: printScreen,
};
