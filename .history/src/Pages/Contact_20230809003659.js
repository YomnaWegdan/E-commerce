import React from 'react'

const Contact = () => {
  return (
    <div>
    <div className='contact_container'>
    <div className='contant'>
    <div className='form'>
    <form method='POST'>
    <input type='text' name='Name' value='' placeholder='Enter Your Full Name' required/>
    <input type='email' name='E-mail' value='' placeholder='Enter Your Full Name' required/>
    <input type='text' name='Subject' value='' placeholder='Enter Your Full Name' required/>

    </form>
    </div>
    </div>
    </div>
    
  

    </div>
  )
}

export default Contact
