import React from 'react'
import './Product.css'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import './Product.css'
import { useAppContext } from '../Components/Context';
const Product = () => {
  const {product ,filterProduct , AllProducts } = useAppContext();

 
  return (
    <>
    <div className='product_detail'>
    <div className='container'>
    <div className='img_box'>
    </div>
    </div>
    </div>
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
    <li onClick={() => filterProduct ("Headphone")}>Headphone</li>
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
      </>
  )
}

export default Product
