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
  if(link1){
    return `![Screenshot](./Assets/Images/${link1})`
  }
  if(link2){
    return `![Screenshot](./Assets/Images/${link2})`
  }
  return null
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} \n

  <br>
  <br>
  ${data.description} \n
  <br>

   [Deployed last version](${data.deployedLink}) \n
   [Github repo](${data.gitHubLink})
  <br>

  ## Table of Contents 
 
  ##### * [Technologies used](#technologies)
  ##### * [Usage walkthrough](#walkthrough)
  ##### * [Installation](#installation)
  ##### * [Credits](#credits)
  ##### * [License](#license)
  ##### * [Contact Info](#contact)


  ## Technologies used:
   _*${data.technologies}*_

  ## Usage walkthrough:
  #### Video walkthrough:
  Please follow this *[link](${data.videoLink})* to watch the walkthrough video.

  #### Screenshots:
  ${screenshots(data.screenshot1, data.screenshot2)}

  ## Installation:
    1. npm install
    2. node index.js
    3. Answer the question in according order.
  

  ## License: \n
  ##### Copyright: ${data.name}\n
  ##### ${renderLicenseBadge(data.license)}\n
  ##### ${renderLicenseLink(data.license)}


  ## Contact Me: \n
  ##### ${data.email}
`
}

module.exports = generateMarkdown;