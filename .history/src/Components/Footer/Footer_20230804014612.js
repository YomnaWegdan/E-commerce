import React from 'react'
import logo from '../../img/logo.svg'
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
    <div className='container'>
    <div className='about'>
    <div className='logo'>
        <img src={logo} alt='logo'></img>
    </div>
    <div className='detail'>
                    <p>We are a team of designers and developers that create high quality WordPress</p>
                    <div className='icon'>
                        <li><RiFacebookFill /></li>
                        <li><AiOutlineInstagram /></li>
                        <li><AiOutlineTwitter /></li>
                        <li><BsYoutube /></li>
                    </div>
                </div>
    </div>
    </div>
      
    </div>
  )
}

export default Footer
