import React from 'react'
import "./Education.css"
function Education() {
  return (
    <div className='educationContainer'>
      <h1 style={{color:"red",marginTop:"10px"}}>Education</h1>
    <div className='edContent'>
      
      <div className='btech'>
          <h2 style={{color:"blue",}}>2024</h2>
         <h4 style={{color:"green"}}> B.Tech in Electrical & Eletronics</h4>
         <h5 style={{color:"navy"}}>Sree Venkateswara College of Engineering, Rajupalem</h5>
         <h6>Graduated with, 70%</h6>

      </div>
      <div className='inter'>
      <h2 style={{color:"blue"}}>2020</h2>
      <h4 style={{color:"green"}}> Intermediate</h4>
         <h5 style={{color:"navy"}}>  Board of Intermediate Education, A.P <br />Rao's Junior Collage, Nellore
         </h5>
         <h6>percentage: 70%</h6>

      </div>
      <div className='shl'>
      <h2 style={{color:"blue"}}>2018</h2>
      <h4 style={{color:"green"}}>10th Standard</h4>
         <h5 style={{color:"navy"}}>Board of Secondary Education, A.P <br />Z.P.High School, Penubarthi </h5>
         <h6>GPA: 7.7</h6>
      </div>
    </div>
    </div>
  )
}

export default Education
