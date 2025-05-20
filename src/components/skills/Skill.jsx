import React from 'react'
import "./Skill.css"
function Skill() {
  return (
       <div className='skillContainer'>
      <h1 style={{color:"red"}}>Skills</h1>
    <div className='skillContent'>
    <div id='img1'>
    <i class="fa-brands fa-html5" ></i><br /><h3>HTML</h3>
    </div>
    <div id='img2'>
    <i class="fa-brands fa-css3"></i><br /><h3>CSS</h3>
    </div>
    <div id='img3'>
    <i class="fa-brands fa-js"></i><br /><h3>JavaScript</h3>
    </div>
    <div id='img4'>
    <i class="fa-brands fa-bootstrap"></i><br /><h3>Bootstarp</h3>
    </div>
    <div id='img7'>
    <i class="fa-brands fa-react"></i><br /><h3>ReactJS</h3>
    </div>
    <div id='img5'>
    <i class="fa-brands fa-node-js"></i><br /><h3>NodeJS</h3>
    </div>
    <div id='img6'>
    <i class="fa-solid fa-leaf"></i><br /><h3>MongoDB</h3>
    </div>
    <div className="img8">
    <img src="https://user-images.githubusercontent.com/11978772/40430986-a0eb7b92-5e63-11e8-80eb-43fe07f664a6.png" alt="" />
    <h3>Express JS</h3>
    </div>
    

    </div>
    </div>
    )
}

export default Skill