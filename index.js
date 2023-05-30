


// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Square = require('./lib/shapes.js');
const Triangle = require('./lib/shapes.js');
const Circle = require('./lib/shapes.js');



// choice
let answer = ""
function isValidColor(answer) {
  const colorNameRegex = /^(red|green|blue|yellow|magenta|cyan)$/i;
  const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return colorNameRegex.test(answer) || hexColorRegex.test(answer);
}


/// Questions 

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Insert an acronym for your LOGO?',
      name: 'text',
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("The answer must contain at least 1 character.");
        } else  if (answer.length > 3) {
          return console.log("The answer must contain 1 to 3 characters.");
        }
        return true;
      }
    },
    {
      type: 'input',
      message: 'What color of fonts do you want? Ex: Blue, White, Red or the hexadecimal number',
      name: 'textColor',
      validate: function (answer) {
        if (!isValidColor(answer)) {
          return console.log(`Invalid color: "${answer}". Please provide a valid color.`);
        }
        return true;
      }
    },
    {
      type: 'list',
      message: 'What shape do you prefer?',
      name: 'pattern',
      choices: ["Triangle", "Circle", "Square"],
      validate: function (answer) {
        if (answer.length === 0) {
          return console.log("Select one!");
        }
        return true;

      }
    }
    ,
    {
      type: 'input',
      message: 'What color of shape do you want? Ex: Blue, White, Red or the hexadecimal number',
      name: 'patternColor',
      validate: function (answer) {
        if (!isValidColor(answer)) {
          return console.log(`Invalid color: "${answer}". Please provide a valid color.`);
        }
        return true;
      }
    },
  ])

  ///generate response and print the svg file
  .then((response) => {
    let svgCode = ""

    if (response.pattern === "Triangle") {
      svgCode += new Triangle(0,0,`${response.patternColor}`, `${response.patternColor}`,5, `${response.text}`, `${response.textColor}`, 50, 20, 100, 100, 10, 100).render();
    } else if (response.pattern  === "Square") {
      svgCode += new Square(10, 10, `${response.patternColor}`, `${response.patternColor}`, 5, `${response.text}`, `${response.textColor}`, 50, 50).render();
    } else {
      svgCode += new Circle(0, 0, `${response.patternColor}`, `${response.patternColor}`, 3, `${response.text}`, `${response.textColor}`, 30, 50, 50).render();
    }

    // let textPick = `<text x="50" y="80" text-anchor="middle" dominant-baseline="middle" fill="${response.textColor}">${response.text}</text> </svg>`

   
  
    ///print  
    const svgContent = `
      ${svgCode} 
    
    `;
    ///call function create the svg file
    writeToFile('logo.svg', svgContent);
  });

//Create the svg file
function writeToFile(file, data) {
  fs.writeFile(file, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Generated logo.svg!');
    }
  });
}




