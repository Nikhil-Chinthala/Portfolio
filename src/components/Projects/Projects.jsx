import React from 'react'
import "./Projects.css"
function Projects() {
  return (
    <div className='projectContainer'>
      <h1 style={{color:"red",marginTop:"10px"}}>Project</h1>
    <div className='projectContent'>
      
      <div className='project1'>
          <h2 style={{color:"black",}}>Multivender E-Commerce Application using ReactJS, Node.JS and MongoDB</h2>
         <h4 style={{color:"blue"}}> Developed a multivendor e-commerce application using the MERN stack, 
            enabling vender registration,product management, and order tracking</h4>
           <div className='footer1'>
            <button style={{backgroundColor:"brown",color:"white"}}>ReactJS</button>
            <button style={{backgroundColor:"brown",color:"white"}}>NodeJs</button> 
            <button style={{backgroundColor:"brown",color:"white"}}>MongoDB</button>
            </div>
      </div>
       <div className='project2'>
          <h2 style={{color:"black",}}>Weather Applicaion using HTML, CSS and JavaScript</h2>
         <h4 style={{color:"blue"}}>Built a user-friendly interface displaying weather conditions, temperature, and forecasts 
                     dynamically. </h4>
           <div className='footer2'>
            <button style={{backgroundColor:"brown",color:"white"}}>HTML</button>
            <button style={{backgroundColor:"brown",color:"white"}}>CSS</button> 
            <button style={{backgroundColor:"brown",color:"white"}}>JavaScript</button>
            </div>
      </div>
      <div className='project3'>
          <h2 style={{color:"black",}}>Calculator Application using HTML, CSS and JavaScript</h2>
         <h4 style={{color:"blue"}}> Designed a clean, user-friendly interface with interactive buttons and display using HTML and CSS.</h4>
           <div className='footer3'> 
            <button style={{backgroundColor:"brown",color:"white"}}>HTML</button>
            <button style={{backgroundColor:"brown",color:"white"}}>CSS</button> 
            <button style={{backgroundColor:"brown",color:"white"}}>JavaScript</button>
            </div>
      </div>
      

      
    </div>
    </div>
  )
}

export default Projects
