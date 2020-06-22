var inquirer = require("inquirer");
var fs = require("fs");
var axios = require("axios");
function askQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What would you like the title to be?",
        name: "title",
      },
      {
        type: "input",
        message: "Write your description.",
        name: "description",
      },
      {
        type: "input",
        message: "Please describe you installation specifications.",
        name: "installation",
      },
      {
        type: "input",
        message: "What are your usage purposes?",
        name: "usage",
      },
      {
        type: "input",
        message: "Write out your credits.",
        name: "credit",
      },
      {
        type: "input",
        message: "Specify your data License.",
        name: "license",
      },
      {
        type: "input",
        message: "Who is the contributor or contributors?",
        name: "contributing",
      },
      {
        type: "input",
        message: "Specify your tests.",
        name: "tests",
      },
      {
        type: "input",
        message: "What is your Github username?",
        name: "username",
      },
    ])
    .then(function (answers) {
      var data = {};

      data.title = answers.title;
      data.description = answers.description;
      data.installation = answers.installation;
      data.usage = answers.usage;
      data.credit = answers.credit;
      data.license = answers.license;
      data.contributing = answers.contributing;
      data.tests = answers.tests;

      axios
        .get("https://api.github.com/users/" + answers.username)
        .then(function (results) {
          console.log(results.data);
          data.picture = results.data.avatar_url;
          data.email = results.data.email;
          data.url = results.data.html_url;

          console.log(data);
          var text = `
#  ${data.title} :book:
          
## Description 
      
${data.description}
          
          
## Table of Contents :clipboard:
          
If your README is very long, add a table of contents to make it easy for users to find what they need.
          
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#Contributing)
* [Badges](#Badges)
* [Contact](#Contact)
          
          
## Installation :wrench:
          
${data.installation}
          
## Usage 
          
${data.usage}
          
## Credits
          
${data.credit}

${data.url}
          
## License
          
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

          
${data.license} :file_folder:

---

🔥 🏆 🔥 Creating a Good Readme involves flair. Please try to add as much decor as possible without looking unprofessional. 
          
## Badges
          
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
![Github Watchers](https://img.shields.io/github/watchers/marlon20m/Good-Readme-Generator?style=social)
![Github Code size](https://img.shields.io/github/languages/code-size/marlon20m/Good-Readme-Generator)
![Code](https://img.shields.io/github/languages/top/marlon20m/Good-Readme-Generator?style=plastic)
![npm Version](https://img.shields.io/npm/v/npm)
![Inquirer](https://img.shields.io/node/v/inquirer)
          
Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
          
          
## Contributing
          
${data.contributing}
          
## Tests
          
${data.tests}
          
## Contact :email:
          
![alt text](${data.picture})
marlonmora.ndr@gmail.com
---
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
          
              `;
          console.log(text);
          fs.writeFile("README.md", text.trim(), function (err) {
            console.log("complete");
          });
        });
    });
}

askQuestions();

function readGen(data) {
  console.log("data", data);
  return
}
