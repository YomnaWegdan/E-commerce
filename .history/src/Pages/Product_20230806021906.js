import React from 'react'
import './Product.css'
import Productdetail from './Productdetail'
const Product = () => {
  return (
    <div>
    <h2>Products</h2>
    <p>Home - Products</p>
    <div className='products'>
    <div className='container'>
    <div className='filter'>
    <div className='categories'>
    <h3>Categories</h3>
    <ul>
    <li>Tablet</li>
    <li>Smart Watch</li>
    <li>Camera</li>
    <li>Gaming</li>
    </ul>
    </div>
    <div className='productbox'>
    <div className='container'>
    {Productdetail.map((el)=>{
      return(
        <>
        <div
        </>
      )
    })}
    </div>
    </div>
    </div>
    </div>
    </div>
      
    </div>
  )
}

export default Product
