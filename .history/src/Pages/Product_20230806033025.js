import React, { useState } from 'react'
import './Product.css'
import Productdetail from './Productdetail'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import './Product.css'
const Product = () => {
  const [product , setProduct] = useState(Productdetail)

  const filterProduct = (product)=>{
    const update = Productdetail.filter((x)=>{
     return( x.Cat=== product )
    })
    setProduct(update)
  }
  
  return (
    <div className='products  '>
    <h3>Products</h3>
    <p>Home - Products</p>
    <div className='container d-flex justify-content-between'>
    <div className='filter'>
    <div className='categories'>
    <h3>Categories</h3>
    <ul>
    <li onClick={()=> AllProducts()}>All Products</li>
    <li onClick={()=> filterProduct('Tablet')}>Tablet</li>
    <li onClick={()=> filterProduct('Smart Watch')}>Smart Watch</li>
    <li onClick={() => filtterproduct ("Headphone")}>Headphone</li>
    <li onClick={()=> filterProduct('Camera')}>Camera</li>
    <li onClick={()=> filterProduct('Gaming')}>Gaming</li>
    </ul>
    </div>
    <div className='productbox '>
    <div className='contant '>
    {product.map((el)=>{
      return(
        <div className='box' key={el.id}>
            <div className='img_box  '>
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
  )
}

export default Product
