import React from 'react'
import "./Contact.css"
function Contact() {
  return (
  
       <div className='contactContainer'>
      <h1 style={{color:"red"}}>Contact</h1>
    <div className='phnContent'>
          <div className='left'>
                  <h3 style={{color:"orange"}}>Get in touch</h3>
                  <input type="text" placeholder='Name' /> <br /> <br />
                  <input type="Email"  placeholder='Email'/> <br /> <br />
                  <input type="subject"  placeholder='Subject'/> <br /> <br />
                  <input type="message" placeholder='Message' /> <br /> <br />
                  <button>Send Message</button>
          </div>
          <div className='right'>
             <h3 > Contact us</h3>
             <div className='footerfont'>
           <a href=""><i class="fa-brands fa-instagram"></i>Nikky Chinthala</a> <br />
           <a href=""><i class="fa-brands fa-x-twitter"></i>Nikky Chinthala</a> <br />
           <a href=""><i class="fa-brands fa-whatsapp"></i>6309096572</a><br />
           <a href=""><i class="fa-solid fa-envelope"></i>nikky.chinthala2@gmail.com</a> <br />
           <a href=""><i class="fa-brands fa-linkedin"></i>Nikhil Chinthala</a>

        
            </div>
          </div>
    </div>
    </div>
  
  )
}

export default Contact
