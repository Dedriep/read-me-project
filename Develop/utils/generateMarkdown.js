

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === license.ISC) { 
    return ` ![BADGE](https://img.shields.io/badge/license-ISC-yellow)`
}if (license === license.MIT) {
    return `  ![BADGE](https://img.shields.io/badge/license-MIT-brightgreen)
    `
}else { return ''

}

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (!license) {
    return ''

  } else {
    return`## LICENSE: This project is protected under a ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const { title, description, installation, contribution, tests, license, ...aboutme } = answers

  console.log(title)
  console.log("from generate markdown")
  console.log(answers)
  return `# <${title}>
${renderLicenseBadge(license)}

- [Installation](##installation)
- [Usage](##usage)
- [Credits](##credits)
- [License](##license)

  ## DESCRIPTION: 
  ${description};
  ## INSTALLATION: 
  ${installation};
  ## CONTRIBUTION: 
  ${contribution};
  ## TESTS: 
  ${tests}
  ${renderLicenseSection(license)}
  ## QUESTIONS:
  You can view my GITHUB profile at gitub.com/${aboutme.username}
  You may reach me at: ${aboutme.email}


`;

}

module.exports = generateMarkdown;
