// import shapes.js
const {Square, Circle, Triangle} = require ('/Users/gabri/Bootcamp/Challenges/Logo-maker-svg-C10/lib/shapes.js');

const shape = new Square();
shape.setColor("blue");
expect(shape.render()).toEqual('<rect x="10" y="10" fill="blue" stroke="blue"  stroke-width="5" width="50" height="30"/>');

const shape2 = new Circle();
shape.setColor("red");
expect(shape2.render()).toEqual('<circle x="0" y="0" fill="red" stroke="red"  stroke-width="5" radius="30" cx="50" cy="50"/>');

const shape3 = new Triangle();
shape.setColor("#60be5b");
expect(shape3.render()).toEqual(' <polygon x="0" y="0" fill="#60be5b" stroke="#60be5b"  stroke-width="5" points="50, 20, 100, 100, 10, 100"/>');