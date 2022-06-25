export type ControllerType = {
  mouse_left: (offset: string) => string;
  mouse_right: (offset: string) => string;
  mouse_up: (offset: string) => string;
  mouse_down: (offset: string) => string;
  mouse_position: () => string;
  draw_square: (width: string) => string;
  draw_rectangle: (width: string, height: string) => string;
  draw_circle: (width: string) => string;
  prnt_scrn: () => Promise<string>;
};
