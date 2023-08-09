import React from 'react'

const Contact = () => {
  return (
    <div>
    <div className='contact_container'>
    <div className='contant'>
    <h2>Contact </h2>
    <div className='form'>
    <form method='POST'>
    <input type='text' name='Name' value='' placeholder='Enter Your Full Name' required/>
    <input type='email' name='E-mail' value='' placeholder='Enter Your E-mail' required/>
    <input type='text' name='Subject' value='' placeholder='Enter Your Subject' required/>
    <textarea name='Message' value='' placeholder='Your Message' required></textarea>
    <button type='submit'>Send</button>

    </form>
    </div>
    </div>
    </div>
    
  

    </div>
  )
}

export default Contact
