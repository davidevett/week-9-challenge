// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    const badgeUrl = `https://img.shields.io/badge/License-${license}-brightgreen.svg`;
    return `![License](${badgeUrl})`;
  } 
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    const licenseUrl = `https://opensource.org/licenses/${license}`;
    return licenseUrl;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `
  This project is licensed under the ${license} license.`;
}
return '';
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
## Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)
${renderLicenseLink(data.license)}
## Installation
${data.installation}
## Usage
${data.usage}
## Credits
${data.credits}
## Tests
${data.tests}
## License
${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
