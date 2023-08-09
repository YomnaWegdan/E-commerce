import React, { Fragment } from 'react'
import { BsArrowBarRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Fragment>
      <div className='top_banner'>
      <div className='container'>
      <div className='detail'>
      <h2>The Best Note Book Collection 2023</h2>
      <Link to='/product'>Shop Now <BsArrowRight/></Link>
      </div>
      </div>
      </div>
    </Fragment>
  )
}

export default Home
