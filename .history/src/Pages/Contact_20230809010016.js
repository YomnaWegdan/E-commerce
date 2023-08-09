import React, { useState } from 'react'
import './Contact.css'
const Contact = () => {
  const [user , setUSer] = useState(
    {}
  )
  return (
    <div>
    <div className='contact_container'>
    <div className='contant'>
    <h2>Contact Us</h2>
    <div className='form'>
    <form method='POST'>
    <input type='text' name='Name' value='' placeholder='Enter Your Full Name' required autoComplete='off'/>
    <input type='email' name='E-mail' value='' placeholder='Enter Your E-mail' required autoComplete='off'/>
    <input type='text' name='Subject' value='' placeholder='Enter Your Subject' required autoComplete='off'/>
    <textarea name='Message' value='' placeholder='Your Message' required autoComplete='off'></textarea>
    <button type='submit'>Send</button>

    </form>
    </div>
    </div>
    </div>
    
  

    </div>
  )
}

export default Contact
