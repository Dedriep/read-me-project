

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (!license) {
    return ''
  
  } else { 
    return `
    ##This project is protected under: ${license} `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const {title, description, installation, contribution, tests, license, ...aboutme} = generateMarkdown
console.log(title)
console.log("from generate markdown")
console.log(answers)
return `# <${title}>
  ## description: ${description};
  ## INSTALLATION: ${installation};
  ## CONTRIBUTION: ${contribution};
  ## TESTS: ${tests}
  ## Questions ${aboutme.email} ${aboutme.username};
  ${renderLicenseSection(license)}


`;

}

module.exports = generateMarkdown;
