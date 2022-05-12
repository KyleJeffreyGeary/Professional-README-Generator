// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  https://github.com/${data.username}/${data.Title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Testing](#testing)
  * [Questions](#questions)
  ## Installation
  You must install the following for to run the application: ${data.installation}
  ## Usage
  In order to use this application, ${data.usage}
  # License
  This project is licensed under the ${data.license} license
  # Contributors
  Contributors: ${data.contributions}
  # Tests
  The following command is needed to run the application: ${data.testing}
  # Questions
  If there are any questions, contact me at ${data.username} or send me an email at ${data.email}
  
`;
}

module.exports = generateMarkdown;
