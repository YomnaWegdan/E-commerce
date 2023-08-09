import React, { Fragment } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import slider from '.././img/slider-img.png'
import img1 from '.././img/Mobile Phone.png'
import img2 from '.././img/headphone.png'
import img3 from '.././img/tp6.png'
import img4 from '.././img/smart watch.png'
import { FiTruck } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import './Home.css'
const Home = () => {
  return (
    <Fragment>
        <div className='top_banner '>
        <div className='container d-flex justify-content-between align-items-center flex-wrap'>
        <div className='detail col-md-6 col-lg-8  col-sm-12 align-items-center'>
        <h2>The Best Note Book Collection 2023</h2>
        <button>
        <Link to='/product' className=' text-decoration-none'>Shop Now <BsArrowRight/></Link>
        </button>
        </div>
        <div className='img_box col-md-6 col-lg-4 col-sm-12 align-items-center'>
            <img src={slider} alt='Slider-img'/>
        </div>
        </div>
        </div>
        <div className='product_type w-100  '>
            <div className='container d-flex justify-content-around flex-wrap col-lg-3 col-md-6 col-sm-12  w-auto '>
            <div className='box '>
            <div className='img_box'>
            <img src={img1} alt='mobile'/>
            </div>
            <div className='detail'><p>23 Products</p>
            </div>
            </div>
            <div className='box'>
            <div className='img_box'>
            <img src={img2} alt='mobile'/>
            </div>
            <div className='detail'><p>52 Products</p>
            </div>
            </div>
            <div className='box'>
            <div className='img_box'>
            <img src={img3} alt='mobile'/>
            </div>
            <div className='detail'><p>63 Products</p>
            </div></div>
            <div className='box'>
            <div className='img_box'>
            <img src={img4} alt='mobile'/>
            </div>
            <div className='detail'><p>18 Products</p>
            </div>
    
            </div>
            </div>
            </div>
            <div className='about'>
            <div className='container d-flex justify-content-between w-100'>
                <div className='box'>
                <div className='icon'>
                  <FiTruck />
                </div>
                <div className='detail'>
                  <h5>Free Shipping</h5>
                  <p>Oder above $1000</p>
                </div>
              </div>
              <div className='box'>
                <div className='icon'>
                  <BsCurrencyDollar />
                </div>
                <div className='detail'>
                  <h5>Return & Refund</h5>
                  <p>Money Back Gaurenty</p>
                </div>
              </div>
              <div className='box'>
                <div className='icon'>
                  <CiPercent />
                </div>
                <div className='detail'>
                  <h3>Member Discount</h3>
                  <p>On every Oder</p>
                </div>
              </div>
              <div className='box'>
                <div className='icon'>
                  <BiHeadphone />
                </div>
                <div className='detail'>
                  <h3>Customer Support</h3>
                  <p>Every Time Call Support</p>
                </div>
              </div>
            </div>
          </div>
            
    </Fragment>
  )
}

export default Home
