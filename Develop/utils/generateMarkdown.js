

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === "ISC") {
    return `![BADGE](https://img.shields.io/badge/license-ISC-yellow)`
  } else if (license === "MIT") {
    return `  ![BADGE](https://img.shields.io/badge/license-MIT-brightgreen)
    `
  } else {
    return ''

  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
if (license==="ISC") {
  return `
  ISC License

Copyright (c) [year] [fullname]

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.

  `
}

else if (license === "MIT") {
return `
MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

`
}

else {
  return ""
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (!license) {
    return ''

  } else {
    return `## LICENSE: 
    This project is protected under a ${license} license. 
    ${renderLicenseLink(license)}
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const { title, description, installation, contribution, tests, license, ...aboutme } = answers
 


  console.log(title)
  console.log("from generate markdown")
  console.log(answers)
  return `# ${title}

${renderLicenseBadge(license)}

* Table of Contents : 
- [Installation](##installation)
- [Usage](##usage)
- [Credits](##credits)
- [License](##license)

  ## DESCRIPTION: 

  ${description}

  ## INSTALLATION: 
  ${installation}

  ## CONTRIBUTION: 
  ${contribution}

  ## TESTS: 
  ${tests}
  
  ${renderLicenseSection(license)}
  Link : ${renderLicenseLink(license)}

  ## QUESTIONS:
  Click here to view my [GITHUB](github.com/${aboutme.username}) profile 

  You may reach me at: ${aboutme.email}


`;

}

module.exports = generateMarkdown;
