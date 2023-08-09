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
    <div className='about col-lg-3 '>
    <div className='logo'>
        <img src={logo} alt='logo'></img>
    </div>
    <div className='detail'>
                    <p className=' mt-4'>We are a team of designers and developers that create high quality WordPress</p>
                    <div className='icon'>
                        <li> <Link to='https://www.facebook.com/'><RiFacebookFill /></Link></li>
                        <li><Link to='https://www.instagram.com/'><AiOutlineInstagram /></Link></li>
                        <li><Link to='https://www.twitter.com/'><AiOutlineTwitter /></Link></li>
                        <li><Link to='https://www.youtube.com/'><BsYoutube /></Link></li>
                    </div>
                </div>
    </div>
    <div className='account col-lg-3 '>
                <h3>My Account</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li><Link to='/cart'>Cart</Link></li>
                    <li>shipping</li>
                    <li>return</li>
                </ul>
            </div>
            <div className='page col-lg-3 '>
                <h3>Pages</h3>
                <ul>
                    <li><Link to='/cart'></Link>Home</L</li>
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
