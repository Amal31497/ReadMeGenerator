// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseBadge = '';
  if(license === "GPL 3.0"){
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  if(license === "APACHE 2.0"){
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if(license === "BSD 3"){
    licenseBadge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }
  if(license === "MIT"){
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if(license === "None"){
    licenseBadge = null
  }
  return licenseBadge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink = '';
  if(license === "GPL 3.0"){
    licenseLink = "[License Link](https://www.gnu.org/licenses/gpl-3.0.en.html)"
  }
  if(license === "APACHE 2.0"){
    licenseLink = "[License Link](http://www.apache.org/licenses/LICENSE-2.0)"
  }
  if(license === "BSD 3"){
    licenseLink = "[Licence Link](https://opensource.org/licenses/BSD-3-Clause)"
  }
  if(license === "MIT"){
    licenseLink = "[License Link](https://opensource.org/licenses/MIT)"
    
  }
  if(license === "None"){
    licenseLink = null
  }
  return licenseLink;
}

function screenshots(link1,link2){
  if(link1 || link2){
    return `![Screenshot](./Assets/Images/${link1})\n  ![Screenshot](./Assets/Images/${link2})`
  }
  return null
}

function credits(credit1, credit2, credit3){
  if(credit1 || credit2 || credit3){
    return `[${credit1}](${credit1})\n  [${credit2}](${credit2})\n  [${credit3}](${credit3})`
  }
  return null
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} \n

  <br>
  ${data.description} \n
  <br>

   [Deployed last version](${data.deployedLink})\n
   [Github repo](${data.gitHubLink})

  <br>

  ## Table of Contents 
 
  ##### * [Technologies used](#Technologies)
  ##### * [Usage walkthrough](#Walkthrough)
  ##### * [Installation](#Installation)
  ##### * [Credits](#Credits)
  ##### * [License](#License)
  ##### * [Contact Info](#Contact)


  ## Technologies:
   _*${data.technologies}*_

  ## Walkthrough:
  #### Video:
  Please follow this *[link](${data.videoLink})* to watch the walkthrough video.

  #### Screenshots:
  ${screenshots(data.screenshot1, data.screenshot2)}

  ## Installation:
  Run the following commands in your integrated terminal to initalize the application:\n
    1. git clone [Repository link you can find under "code" button] (To get the code from a repo)\n
    2. npm i (To install all needed packages)\n
    3. node index.js\n
    4. Answer all the questions accordingly\n
    5. Get the output in a form of a new custom generated README.md file
  
  ## Credits:
  ${credits(data.credit1, data.credit2, data.credit3)}

  ## License: \n
  ##### Copyright: ${data.name}\n
  ##### ${renderLicenseBadge(data.license)}\n
  ##### ${renderLicenseLink(data.license)}


  ## Contact: \n
  ##### ${data.email}
`
}

module.exports = generateMarkdown;