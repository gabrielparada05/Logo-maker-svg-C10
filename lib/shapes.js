
// Parent class
class Shape {
    constructor(x, y, fill, stroke, strokeWidth) {
      this.x = x;
      this.y = y;
      this.fill= fill;
      this.stroke= stroke;
      this.strokeWidth= strokeWidth;
    }
  

  }
  
  // Child class for square
  class Square extends Shape {
    constructor(x, y, fill, stroke, strokeWidth, width, height) {
      super(x, y, fill, stroke, strokeWidth);
      this.width = width;
      this.height = height;
    }
  
    print() {
        console.log( `<svg xmlns='http://www.w3.org/2000/svg'>
        <rect x='${this.x}' y='${this.y}' fill='${this.fill}' stroke='${this.stroke}'  stroke-width='${this.strokeWidth} width='${this.width}' height='${this.height}'/> </svg>`)
  }
}

  // Child class for circle

  class Circle extends Shape {
    constructor(x, y, fill, stroke, strokeWidth, radius, cx, cy) {
    super(x, y, fill, stroke, strokeWidth);
      this.radius = radius;
      this.cx=cx;
      this.cy=cy;   
    }
    
    print() {
        console.log( `<svg xmlns='http://www.w3.org/2000/svg'>
        <circle x='${this.x}' y='${this.y}' fill='${this.fill}' stroke='${this.stroke}'  stroke-width='${this.strokeWidth} radius='${this.radius}' cx='${this.cx} cy='${this.cy}'/> </svg>`);
    }
  }
  


// Child class for triangle
  class Triangle extends Shape {
    constructor(x, y, fill, stroke, strokeWidth, x1, y1, x2, y2, x3, y3) {
    super(x, y, fill, stroke, strokeWidth);
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
      this.x3 = x3;
      this.y3 = y3;
    }
  
    print() {
        console.log( `<svg xmlns='http://www.w3.org/2000/svg'>
        <polygon x='${this.x}' y='${this.y}' fill='${this.fill}' stroke='${this.stroke}'  stroke-width='${this.strokeWidth} points='${this.x1}, ${this.y1}, ${this.x2}, ${this.y2}, ${this.x3}, ${this.y3}'/> </svg>`);
    }
  }
  
// values from https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes <rect x='10' y="10" width="50" height="50" stroke="#60be5b" fill="white" stroke-width="5" xml:base="10"/>
const square = new Square(10, 10, 'white', '#60be5b', 5, 50, 50);
square.print()



 

// values from https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes <circle x= '0' y='0' cx="50" cy="50" r="30" stroke="red" fill="white" stroke-width="3"/>
const circle = new Circle(0, 0, 'white', 'red', '3', 30, 50, 50);
circle.print();


  // Usage example     <polygon points="50, 20, 100, 100, 10, 100" stroke="green" fill="transparent" stroke-width="5"/>
  const triangle = new Triangle(0,0,"transparent", 'green',5,50, 20, 100, 100, 10, 100);
  triangle.print();
