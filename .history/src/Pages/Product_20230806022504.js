import React from 'react'
import './Product.css'
import Productdetail from './Productdetail'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import './Home.css'
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
    <div className='box'>
    <div className='container'>
    {Productdetail.map((el)=>{
      return(
        <div className='box' key={el.id}>
            <div className='img_box d-flex justify-content-around '>
            <img src={el.Img} alt={el.Title}></img>
            <div className='icon'>
              <li ><AiOutlineShoppingCart /></li>
              <li ><BsEye /></li>
              <li><AiOutlineHeart /></li>                                     
            </div>
            </div>
            <div className='detail '>
            <p> {el.Cat}</p>
            <h4 className=''>{el.Title}</h4>
            <h5 >{el.Price}</h5>
            </div>
        </div>
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
