// Реализовать абстрактный класс MyGraphicsPrimitive2D у которого есть следующие свойства:
//   прямоугольная область, описывающая примитив; метод - переместить примитив на заданное смещение;
// От него дожен наследоваться абстрактный класс MyAreaPrimitive2D, у которого есть свойство площадь.
//   От него должны наследоваться класс MyCircle, у него есть свойства: центр окружности и ее радиус,
//   а также должен наследоваться класс MyRectangle с свойствами: ширина и высота, левая верхняя граница,
//   правая нижняя граница

export interface ICoordinates {
  x: number,
  y: number
}
export interface IFigureCircle {
  radius: number;
  circleCenter: ICoordinates;
}
export interface IFigureRectangle {
  center: ICoordinates;
  width: number;
  height: number
}

export abstract class MyGraphicsPrimitive2D {
  private _coordinates: ICoordinates;
  constructor(x: number, y: number) {
    this._coordinates = {x, y}
  }
  getCenter(): Readonly<ICoordinates> {
    return this._coordinates
  }
  movePrimitive(x: number, y: number) {
    this._coordinates.x = x;
    this._coordinates.y = y;
  }
}

export abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
  abstract x: number;
  abstract y: number;
  abstract getArea(): void;
}

export class MyCircle extends MyAreaPrimitive2D {
  private _circleCenter: IFigureCircle;
  constructor(public x: number, public y: number, radius) {
    super(x, y);
    this._circleCenter = {
      circleCenter: this.circleCenter,
      radius
    }
  }
  getCircleCenter(): Readonly<ICoordinates> {
    return this.circleCenter
  }
  getRadius(): Readonly<number> {
    return this._circleCenter.radius;
  }
  getArea(): number {
    return Math.PI * (this.radius * 2)
  }
}

export class MyRectangle extends MyAreaPrimitive2D {
  private _rectangle: IFigureRectangle;
  constructor(public x: number, public y: number, public width: number, public height: number) {
    super(x, y);
    this._rectangle = {center: this.center, width, height}
  }
  getArea(): number {
    return this._rectangle.width * this._rectangle.height
  }
  getWidth(): number {
    return this._rectangle.width
  }
  getHeight(): number {
    return this._rectangle.height
  }
  getTopLeftBorder(): Readonly<ICoordinates> {
    return this.center
  }
  getRightBottomBorder(): Readonly<ICoordinates> {
    return {
      x: this.center.x + this._rectangle.width,
      y: this.center.y + this._rectangle.height
    }
  }
}


