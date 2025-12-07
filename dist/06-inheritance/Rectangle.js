"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(x, y, _width, _length) {
        super(x, y);
        this._width = _width;
        this._length = _length;
    }
    calculateArea() {
        return this._width * this._length;
    }
}
exports.Rectangle = Rectangle;
