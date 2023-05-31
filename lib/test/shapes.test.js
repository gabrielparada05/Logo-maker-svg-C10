// import shapes.js
const { Triangle, Square, Circle } = require('/Users/gabri/Bootcamp/Challenges/Logo-maker-svg-C10/lib/shapes.js');


  describe('Circle', () => {
     test('should print the color selected', () => {
        const shape = new Circle(0,0,'blue','blue', 5, 'GAP', 'red', 30, 50, 50)
        const temp = shape.render()
        const expectResult = `<svg width="300" height="200" fill="none" xmlns='http://www.w3.org/2000/svg'>
        <circle x="0" y="0" fill="blue" stroke="blue"  stroke-width="5" r="60" cx="150" cy='100'/> <text x="150" y="102" text-anchor="middle" dominant-baseline="middle" fill="red" font-family="Futura, helvetica" font-weight="bolder" font-size="40px">GAP</text></svg>`
        expect(temp).toEqual(expectResult);
      });
    });

    describe('Square', () => {
      test('should print the color selected', () => {
         const shape = new Square(100,50,'blue','blue', 5,'Rec', 'red', 100, 100)
         const temp = shape.render()
         const expectResult = `<svg width="300" height="200" fill="none" xmlns='http://www.w3.org/2000/svg'><rect x='100' y='50' fill='blue' stroke='blue'stroke-width="5" width='100' height='100'/> <text x="150" y="105" text-anchor="middle" dominant-baseline="middle" fill="red" font-family="Futura, helvetica" font-weight="bolder" font-size="45px">Rec</text> </svg>`
         expect(temp).toEqual(expectResult);
       });
     });

     describe('Square', () => {
      test('should print the color selected', () => {
         const shape = new Triangle(300,200,'blue','blue', 5,'Tri', 'red', 150, 40, 250, 160, 50, 160)
         const temp = shape.render()
         const expectResult =  `<svg width="300" height="200" fill="none" xmlns='http://www.w3.org/2000/svg'><polygon x='0' y='0' fill='blue' stroke='blue'  stroke-width='5' points='150, 40, 250, 160, 50, 160'/> <text x="150" y="125" text-anchor="middle" dominant-baseline="middle" fill="red" font-family="Futura, helvetica" font-weight="bolder" font-size="40px">Tri </text>  </svg>`
         expect(temp).toEqual(expectResult);
       });
     });




