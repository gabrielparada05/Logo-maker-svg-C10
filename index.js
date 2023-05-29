


    // TODO: Include packages needed for this application
    const fs = require('fs');
    const inquirer = require('inquirer');
    const Square = require('./lib/shapes.js');
    const Triangle = require('./lib/shapes.js');
    const Circle = require('./lib/shapes.js');
  

    // choices

    const pattern = ['circle', 'triangle', 'square']

    

    /// Questions 
    
    inquirer
      .prompt([
        {
          type: 'input',
          message: 'Insert an acronym for your LOGO?',
          name: 'text',
          validate: function (answer) {
              if (answer.length < 3) {
                  return console.log("The answer must contain more than 3 characters.");
              }
              return true;
          }
        },
        {
            type: 'input',
            message: 'What color of fonts do you want? Ex: Blue, White, Red or the hexadecimal number',
            name: 'textColor',
            validate: function (answer) {
                if (answer.length < 3) {
                    return console.log("The answer must contain more than 3 characters.");
                }
                return true;
            }
          },
          {
            type: 'list',
            message: 'What shape do you prefer?',
            name: 'pattern',
            choices: pattern,
            validate: function (answer) {
              if (answer.length === 0) {
                  return console.log("Select one!");   
              }
              return true;
          }
          },
          {
            type: 'input',
            message: 'What color of shape do you want? Ex: Blue, White, Red or the hexadecimal number',
            name: 'patternColor',
            validate: function (answer) {
                if (answer.length < 3) {
                    return console.log("The answer must contain more than 3 characters.");
                }
                return true;
            }
          },
      ])
    
    ///generate response and print the readme file
    .then((response) => {
    ///put as a function and call the function 
      const squarePrint = new Square(10, 10, `'${response.patternColor}'`, 'red', 5, 50, 50)
      squarePrint.print()

      /// get the text to here as well.. remove svg closing tag from the shape and put inside the text
  ///print  
      const readmeContent = `
  
    
    `;
      ///call function create the readme file
        writeToFile('logo.svg', readmeContent);
      });
    
      //Create the readme file
      function writeToFile(file, data) {
        fs.writeFile(file, data, (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log('logo.svg file created!');
          }
        });
      }
      
    
    
   
    
    