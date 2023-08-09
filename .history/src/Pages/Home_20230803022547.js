import React, { Fragment } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import slider from '.././img/slider-img.png'
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
            <div ></div>
        </div>
    </Fragment>
  )
}

export default Home
