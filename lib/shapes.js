// Parent class
class Shape {
    constructor(x, y, fill, stroke, strokeWidth, text, textColor) {
    
// validation to prevent same color from text and shape
if (fill === textColor) {
  throw new Error('Color of the shape should be different from the color of the text');
  }
      this.x = x;
      this.y = y;
      this.fill = fill;
      this.stroke = stroke;
      this.strokeWidth = strokeWidth;
      this.text = text;
      this.textColor = textColor;
      
    }


}

  // Child class for square
  class Square extends Shape {
    constructor(x, y, fill, stroke, strokeWidth, text, textColor, width, height) {
      super(x, y, fill, stroke, strokeWidth, text, textColor);
      this.width = width;
      this.height = height;
    }
  
    render() {
        return `<svg width="300" height="200" fill="none" xmlns='http://www.w3.org/2000/svg'><rect x='100' y='50' fill='${this.fill}' stroke='${this.fill}' stroke-width="5" width='100' height='100'/> <text x="150" y="105" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}" font-family="Futura, helvetica" font-weight="bolder" font-size="45px">${this.text}</text> </svg>`
  }
}

  // Child class for circle

  class Circle extends Shape {
    constructor(x, y, fill, stroke, strokeWidth, text, textColor, radius, cx, cy) {
    super(x, y, fill, stroke, strokeWidth, text, textColor);
      this.radius = radius;
      this.cx=cx;
      this.cy=cy;   
    }
    
    render() {
        return `<svg width="300" height="200" fill="none" xmlns='http://www.w3.org/2000/svg'>
        <circle x="0" y="0" fill="${this.fill}" stroke="${this.fill}"  stroke-width="5" r="60" cx="150" cy='100'/> <text x="150" y="102" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}" font-family="Futura, helvetica" font-weight="bolder" font-size="40px">${this.text}</text></svg>`;
    }
  }
  


// Child class for triangle
  class Triangle extends Shape {
    constructor(x, y, fill, stroke, strokeWidth, text, textColor, x1, y1, x2, y2, x3, y3) {
    super(x, y, fill, stroke, strokeWidth, text, textColor);
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
      this.x3 = x3;
      this.y3 = y3;
    }
  
    render() {
        return `<svg width="300" height="200" fill="none" xmlns='http://www.w3.org/2000/svg'><polygon x='0' y='0' fill='${this.fill}' stroke='${this.fill}'  stroke-width='5' points='150, 40, 250, 160, 50, 160'/> <text x="150" y="125" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}" font-family="Futura, helvetica" font-weight="bolder" font-size="40px">${this.text} </text>  </svg>`;
    }
  }
  
// values from https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes <rect x='10' y="10" width="50" height="50" stroke="#60be5b" fill="white" stroke-width="5" xml:base="10"/>
//const square = new Square(10, 10, 'white', '#60be5b', 5, 50, 50);
//square.render()


// values from https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes <circle x= '0' y='0' cx="50" cy="50" r="30" stroke="red" fill="white" stroke-width="3"/>
//const circle = new Circle(0, 0, 'white', 'red', '3', 30, 50, 50);
//circle.render();


  // Usage example     <polygon points="50, 20, 100, 100, 10, 100" stroke="green" fill="transparent" stroke-width="5"/>
 // const triangle = new Triangle(0,0,"transparent", 'green',5,50, 20, 100, 100, 10, 100);
  //triangle.render();

  

  module.exports = {
    Triangle,
    Circle,
    Square
  };

