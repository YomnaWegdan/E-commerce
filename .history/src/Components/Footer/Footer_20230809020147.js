import React from 'react'
import logo from '../../img/logo.svg'
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
    <div className='container d-flex justify-content-between '>
    <div className='about col-lg-3 col-md-6 col-sm-6'>
    <div className='logo'>
        <img src={logo} alt='logo'></img>
    </div>
    <div className='detail'>
                    <p className=' mt-4'>We are a team of designers and developers that create high quality WordPress</p>
                    <div className='icon'>
                        <li><RiFacebookFill /></li>
                        <li><AiOutlineInstagram /></li>
                        <li><AiOutlineTwitter /></li>
                        <li><BsYoutube /></li>
                    </div>
                </div>
    </div>
    <div className='account col-lg-3 col-md-6 col-sm-6'>
                <h3>My Account</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <Link to='/cart'>Cart</Link>
                    <li>shipping</li>
                    <li>return</li>
                </ul>
            </div>
            <div className='page col-lg-3 col-md-6 col-sm-6'>
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terma & Condition</li>
                </ul>
            </div>
    </div>
      
    </div>
  )
}

export default Footer
