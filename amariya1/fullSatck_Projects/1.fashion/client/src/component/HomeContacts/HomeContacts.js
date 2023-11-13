import React from 'react'
import "./Homecontacts.scss"
import { useState } from 'react';
const HomeContacts = () => {
        
      const [inputval,setInputval] = useState({
        name:"",
        email:"",
        message:""
    });
    
    const handleChange = (e)=>{
      const {name,value} = e.target;

      setInputval({...inputval,[name]:value})
  }
  
  return (
      <>
        <section id='contact'>
            <div className='contact containers'>
              {/*  map */}
              <div className="map">

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56062.10975187546!2d77.0450953!3d28.573310099999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1a9c31eec4e1%3A0x39493976cba4c89a!2sDwarka%2C%20Delhi!5e0!3m2!1sen!2sin!4v1699855142999!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              
              {/* login form */}
              <form action="https://formspree.io/f/xzbowpjq" method="POST">
                        <div className="form">
                            <div className="form-txt">
                                <h4>INFORMATION</h4>
                                <h1>Contact Us</h1>
                                <span>As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.</span>
                                <h3>USA</h3>
                                <p>195 E Parker Square Dr, Parker, CO 801<br />+43 982-314-0958</p>
                                <h3>India</h3>
                                <p>HW95+C9C, Lorem ipsum dolor sit.<br />411014</p>
                            </div>
                            <div className="form-details">
                                <input type="text" name="name" id="name" value={inputval.name} placeholder="Name" className='textinp' onChange={handleChange} />
                                <input type="email" name="email" id="email" value={inputval.email}  placeholder="Email" className='emailinp' onChange={handleChange}  />
                                <textarea name="message" id="message" cols="52" rows="7" value={inputval.message}  placeholder="Message" className='textareainp' onChange={handleChange} />
                                <button >SEND MESSAGE</button>
                            </div>
                        </div>
                    </form>
            </div>
        </section>
      </>
  )
}

export default HomeContacts