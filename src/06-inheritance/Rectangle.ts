import { Shape } from "./Shape";

export class Rectangle extends Shape {
  constructor(
    x: number,
    y: number,
    private _width: number,
    private _length: number
  ) {
    super(x, y);
  }

  calculateArea(): number {
    return this._width * this._length;
  }
}
