import React, { Fragment } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import slider from '.././img/slider-img.png'

const Home = () => {
  return (
    <Fragment>
        <div className='top_banner '>
        <div className='container'>
        <div className='detail d-flex align-items-start'>
        <h2>The Best Note Book Collection 2023</h2>
        <button>
        <Link to='/product' className=' text-decoration-none'>Shop Now <BsArrowRight/></Link>
        </button>
        </div>
        <div className='img_box '>
            <img src={slider} alt='Slider-img'/>
        </div>
        </div>
        </div>
    </Fragment>
  )
}

export default Home
