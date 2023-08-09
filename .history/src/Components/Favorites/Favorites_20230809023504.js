import React from 'react'
import { useAppContext } from '../Context';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'

const Favorites = () => {
    const {addToFavorite , removeFromFavorite , favorites , addToCart} = useAppContext();

  return (
    <div>
    <div className='cartcontainer'>
        {favorites.length === 0 && 
            <div className='emptycart'>
            <h2 className='empty'>Cart is Empty</h2>
            <Link to='/product' className='emptycartbtn'>Shop Now</Link>
            </div>
            }
  
        <div className='contant'>
            {favorites.map((el)=>{
                return(
                    <div className='cart_item' key={el.id}>
                        <div className='img_box'>
                        <img src={el.Img} alt={el.Title}/>
                        </div>
                        <div className='detail'>
                        <div className='info'>

                        <h4>{el.Cat}</h4>
                        <h3>{el.Title}</h3>
                        <p>Price: ${el.Price}</p>
                        
                        <div className='qty'>
                        <button onClick={()=> addToCart(el)}>Add To Cart</button>
                        </div>
                        <div className='close'>
                        <button  onClick={()=> removeFromFavorite(el)}><AiOutlineClose/></button>
                        </div>

                        </div>
                    </div></div>
                )
            })}

        </div>
        </div>
       
    </div>
  )
}

export default Favorites
