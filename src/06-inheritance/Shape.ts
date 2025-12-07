export abstract class Shape {
  constructor(
    protected _x: number,
    protected _y: number
  ) {}

  getInfo(): string {
    return `x=${this._x}, y=${this._y}`;
  }

  abstract calculateArea(): number;
}
