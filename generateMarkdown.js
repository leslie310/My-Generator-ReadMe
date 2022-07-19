// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Licensing:
[![license](https://img.shields.io/badge/license-${data.license}-brightgreen)](https://shields.io)

## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Additional Info](#additional-info)

## Description:
${data.description}

## Installation:
${data.installation}

## Usage:
${data.usage}

## License:
${data.license}

## Contribution:
${data.contribution}

## Testing:
${data.testing}

## Additional Info:
-Github: [${data.github}](https://github.com/${data.github})\n
-Email: ${data.email} `;
}


module.exports = generateMarkdown;
