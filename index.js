function init () {

    // TODO: Include packages needed for this application
    const fs = require('fs');
    const inquirer = require('inquirer');
    const shapes = require('./lib/shapes.js');

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
    
      const readmeContent = `
    ${markLicense}
    
    # ${response.title}
    
    ## Description
    ${response.description}
    
    ## Table of Contents
    
    - [Description](#description)
    - [Installation](#installation)
    - [Screenshot path](#screenshot-path)
    - [Usage](#usage)
    - [Functionalities](#functionalities)
    - [Tools Used](#tools-used)
    - [License](#license)
    - [Test](#test)
    - [How to Contribute](#how-to-contribute)
    - [Questions](#questions)
    - [Credits](#credits)
    
    ## Installation 
    ${response.gettingStarted}
    
    ## Screenshot path
    A screenshot is available ![alt text](${response.screenshot})
    
    ## Usage
    ${response.usage}
    
    ## Functionalities
    ${response.functionalities}
    
    ## Tools Used
    ${response.toolsUsed}
    ${response.toolsDescription}
    
    ## License
    ${markLicense}
    
    ## Test
    ${response.test}
    
    ## How to Contribute  
    Users can collaborate with this project at ${response.repoUrl}.
    
    ## Questions 
     Email: [gabrielparada05@gmail.com](mailto:${response.email}). Or, through my GitHub profile ${response.gitHubUserName}, available at https://github.com/${response.gitHubUserName}.
    
    
    ## Credits
    ${response.credits}
    
    `;
      ///call function create the readme file
        writeToFile('README.md', readmeContent);
      });
    
      //Create the readme file
      function writeToFile(file, data) {
        fs.writeFile(file, data, (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log('README.md file created!');
          }
        });
      }
      
    }
    
    
    init();
    
    
    
    