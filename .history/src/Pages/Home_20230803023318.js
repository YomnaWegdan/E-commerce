import React, { Fragment } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import slider from '.././img/slider-img.png'
import img1 from '.././img/Mobile Phone.png'
import img2 from '.././img/headphone.png'
import img3 from '.././img/cpu heat.jpg'
import img4 from '.././'
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
        <div className='product_type'>
            <div className='container'>
            <div className='box'>
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
            </div>
            </div>
            </div>
            
        </div>
    </Fragment>
  )
}

export default Home
