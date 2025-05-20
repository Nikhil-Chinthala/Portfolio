import React from 'react'
import photo from '../../assets/profile.png'
import "./Content.css"
function Content() {
  const handleLinkedIn = () => {
    let linkedInDomElement = document.createElement("a")
    linkedInDomElement.href = "https://www.linkedin.com/in/nikhil-chinthala-862b4a31b/"
    linkedInDomElement.click()
  }

  const handleGitHub = () => {
    let GithubDomElement = document.createElement("a")
    GithubDomElement.href = "https://github.com/Nikhil-Chinthala" 
    GithubDomElement.click()
  }
  const handleResume = () => {
    let ResumeDomElement = document.createElement("a")
    ResumeDomElement.href = "src/components/content/Chinthala Nikhil.pdf"
    ResumeDomElement.click()
  }
  return (
    <div className='content'>
      <img id='img' src={photo} alt=""  />
      <h2 style={{ color: "skyblue" }}>Hello, I'm</h2>
      <h1 style={{ color: "red" }}>Nikhil Chinthala</h1>
      <h3 style={{ color: "#deb887" }}>Full Stack Devloper</h3>

      <div className='btns'>
        <button id='btn1' onClick={handleGitHub}>Github  <i class="fa-brands fa-github"></i> </button>
        <button id='btn2' onClick={handleLinkedIn}>Linkedin  <i class="fa-brands fa-linkedin"></i></button>
        <button id='btn3' onClick={handleResume}>Resume  <i class="fa-solid fa-user"></i></button>
      </div>

    </div>
  )
}

export default Content
