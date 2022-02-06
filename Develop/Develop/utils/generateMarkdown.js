// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'mit'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  else if (license === 'GNU AGPLv3'){
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
  }
  else if (license === 'Apache 2.0'){
    return  '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  else if (license === 'Boost Software License 1.0'){
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  }
  else {
    return '\n'  
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'mit'){
    return '[https://choosealicense.com/licenses/mit/](https://choosealicense.com/licenses/mit/).'
  }
  else if (license === 'GNU AGPLv3'){
    return '[https://choosealicense.com/licenses/gpl-3.0/](https://choosealicense.com/licenses/gpl-3.0/)'
  }
  else if (license === 'Apache 2.0'){
    return '[https://choosealicense.com/licenses/apache-2.0/](https://choosealicense.com/licenses/apache-2.0/)'
  }
  else if (license === 'Boost Software Liscense 1.0'){
    return '[https://choosealicense.com/licenses/apache-2.0/](https://choosealicense.com/licenses/apache-2.0/)'
  }
  else {
    return '\n '
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
   if(license === 'none'){
    return '\n'
}
else {
  return `The license used for this file is ${license}`
}}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}

  This project was created by ${data.contributors}

## Description

${data.description}

My main motivation for this project is ${data.motivation}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}


## License

${renderLicenseSection(data.license)} ${renderLicenseLink(data.license)} 

## Badges

${renderLicenseBadge(data.license)}


## Features

${data.features}

## How to Contribute

${data.contribute}

## Tests

${data.tests}

## Contact
If you have any questions about the project, the best email is ${data.email}. Also check out my github at [${data.gitHub}](https://github.com/${data.gitHub}/)
`;
}

module.exports = generateMarkdown;
