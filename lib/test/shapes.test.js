// import shapes.js
const { Triangle, Square, Circle } = require('/Users/gabri/Bootcamp/Challenges/Logo-maker-svg-C10/lib/shapes.js');


// describe('Square', () => {
//       test('should print the color selected', () => {
//         const shape = new Square();
//         shape.setColor('blue');
//         expect(shape.render()).toEqual(`
//         <rect x='100' y='50' fill='blue' stroke='blue' stroke-width="5" width='100' height='100'/>`);
//       });
//     });
// //   });

//   describe('Triangle', () => {

//      test('should print the color selected', () => {
//         const shape = new Triangle();
//         shape.setColor('red');
//         expect(shape.render()).toEqual(`
//         <polygon x='0' y='0' fill='red' stroke='red'  stroke-width='5' points='150, 40, 250, 160, 50, 160'/> <text x="150" y="125" text-anchor="middle" dominant-baseline="middle" fill="black">"white" font-family="Futura, helvetica" font-weight="bolder" font-size="40px"</text>  </svg>`);
//       });
//     });
//   });

  describe('Circle', () => {
     test('should print the color selected', () => {
        const color = 'blue'
        const shape = new Circle(0,0,`${color}`,`${color}`, 5, 100, 100, 'GAP', 'red', 30, 50, 50)
        expect(shape.render()).toEqual(`<svg width="300" height="200" fill="none" xmlns='http://www.w3.org/2000/svg'>
        <circle x='0' y='0' fill='${color}' stroke='${color}'  stroke-width="5" radius='30' cx="50" cy='50'/> <text x="150" y="102" text-anchor="middle" dominant-baseline="middle" fill="red" font-family="Futura, helvetica" font-weight="bolder" font-size="25px">GAP</text> `);
      });
    });



// describe('Square', () => {
//     test('renders a square with the correct attributes', () => {
//       const square = new Square(10, 10, 'white', '#60be5b', 5, 'GAP', 'red', 50, 50);
//       expect(square.render()).toEqual(`
//         <svg width="50" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <rect x="10" y="10" width="50" height="50" fill="white" stroke="#60be5b" stroke-width="5"/> <text x="150" y="102" text-anchor="middle" dominant-baseline="middle" fill="red" font-family="Futura, helvetica" font-weight="bolder" font-size="25px">GAP</text> 
//         </svg>
//       `);
//     });
//   });



// COLOR TEXT AND COLOR SHAPE okkk
describe('Square', () => {
  it('throws an error if the fill color is the same as the text color', () => {
    expect(() => {
      const square = new Square(50, 50, 'red', 'red', 5, 'A', 'red', 100, 100);
      square.render();
    }).toThrow(new Error('Color of the shape should be different from the color of the text'));
  });
});


