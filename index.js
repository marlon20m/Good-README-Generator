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

          console.log(data);
          var text = `
#  ${data.title}
          
## Description 
      
${data.description}
          
          
## Table of Contents (Optional)
          
If your README is very long, add a table of contents to make it easy for users to find what they need.
          
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#Contributing)
* [Badges](#Badges)
* [Contact](#Contact)
          
          
## Installation
          
${data.installation}
          
## Usage 
          
${data.usage}
          
## Credits
          
${data.credit}
          
          
          
## License
          
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
          
${data.license}
          
---

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
          
## Badges
          
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
          
Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
          
          
## Contributing
          
${data.contributing}
          
## Tests
          
${data.tests}
          
## Contact
          
${data.picture}
${data.email}
          
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
