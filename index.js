// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Square, Circle } = require('./lib/shapes.js');


/// Questions 
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Insert an acronym for your LOGO?',
      name: 'text',
      validate: function (answer) {
        if (answer.length === 0 || answer.length > 3) {
          return console.log("The acronym should to be 1 to 3 characters");
        }
        return true;
      }
    },
    {
      type: 'input',
      message: 'What color of fonts do you want? Use lowercase. Ex: blue, white, red or the hexadecimal number',
      name: 'textColor',
      validate: function (answer) {
        if (answer.length === 0) {
          return console.log("Write one valid!");
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
      message: 'What color of shape do you want? Use lowercase. Ex: blue, white, red or the hexadecimal number',
      name: 'patternColor',
      validate: function (answer) {
        if (answer.length === 0) {
          return console.log("Write one!");
        }
        return true;
      }
    },
  ])

  ///generate response and print the svg file
  .then((response) => {

    // // validation to prevent a wrong color in shape  https://www.geeksforgeeks.org/how-to-validate-hexadecimal-color-code-using-regular-expression/
    // convert in lowercase to prevent error generating the color
    let textColor = response.textColor.toLowerCase()
    let shapeColor = response.patternColor.toLowerCase()


    function isValidColor(textColor, shapeColor) {
          // to match valid color names
          const colorNameRegex = /^(red|green|blue|yellow|magenta|cyan|black|white|gray|brown|orange|pink|purple|violet|indigo|turquoise|olive|lime|gold|silver|navy|maroon|coral|lavender|plum|orchid|peach|sienna|slate|tan|tomato|chocolate|firebrick|forest|khaki|midnight)$/i;
        
          // match valid hexadecimal color codes
          const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        
          //  matches either color names or hexadecimal format
          return colorNameRegex.test(textColor, shapeColor) || hexColorRegex.test(textColor, shapeColor);
        }
      
        if (!isValidColor(shapeColor)) {
          throw new Error('Invalid color selected for shape');
        }

        if (!isValidColor(textColor)) {
          throw new Error('Invalid color selected for text');
        }

        isValidColor(textColor, shapeColor)

     
    let svgCode = "";
    let patternChoice = response.pattern  
// if statement to pick shape 
    if (patternChoice === "Triangle") {
       let shape1 = new Triangle(0,0,`${shapeColor}`, `${shapeColor}`,5, `${response.text}`, `${textColor}`, 50, 20, 100, 100, 10, 100);
       svgCode = shape1.render()
    } else if (patternChoice  === "Square") {
       let shape2 = new Square(10, 10, `${shapeColor}`, `${shapeColor}`, 5, `${response.text}`, `${textColor}`, 50, 50);
       svgCode = shape2.render();
    } else if  (patternChoice === "Circle")  {
       let shape3 = new Circle(0, 0, `${shapeColor}`, `${shapeColor}`, 3, `${response.text}`, `${textColor}`, 30, 50, 50);
       svgCode = shape3.render();
    } else {
      console.log("Invalid pattern")
    }
  
   
  
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




