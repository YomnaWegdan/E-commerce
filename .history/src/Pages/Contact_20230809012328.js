import React, { useState } from 'react'
import './Contact.css'
const Contact = () => {
  const [user , setUser] = useState(
    {Name : '' , Email:'' , Subject:'' , Message:''}
  )
  let name, value
  const data = (e) => 
  {
      name = e.target.name;
      value = e.target.value;
      setUser({...user, [name]: value})
  }
  const sendData = async ()=>{

  }
  return (
    <div>
    <div className='contact_container'>
    <div className='contant'>
    <h2>Contact Us</h2>
    <div className='form'>
    <form method='POST'>
    <input type='text' name='Name' value={user.Name} placeholder='Enter Your Full Name' required autoComplete='off' onChange={data}/>
    <input type='email' name='Email' value={user.Email} placeholder='Enter Your E-mail' required autoComplete='off'/>
    <input type='text' name='Subject' value={user.Subject} placeholder='Enter Your Subject' required autoComplete='off'/>
    <textarea name='Message' value={user.Message} placeholder='Your Message' required autoComplete='off'></textarea>
    <button type='submit' onClick={sendData}>Send</button>
    </form>
    </div>
    </div>
    </div>
    
  

    </div>
  )
}

export default Contact
