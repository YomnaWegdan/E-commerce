import React from 'react'
import { useAppContext } from '../Context';
import { Link } from 'react-router-dom';

const Favorites = () => {
    const {addToFavorite , removeFromFavorite , favorites} = useAppContext();

  return (
    <div>
    <div className='cartcontainer'>
    {favorites.length === 0 && 
        <div className='emptycart'>
        <h2 className='empty'>Cart is Empty</h2>
        <Link to='/product' className='emptycartbtn'>Shop Now</Lin>
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
            
                    <h4 className='subtotal'>sub total: ${el.Price * el.qty}</h4>
                    </div>
                    <div className='close'>

                    <button  onClick={()=> removeproduct(el)}><AiOutlineClose/></button>
                    </div>
</div>

                    </div>
                )
            })}

        </div>
        {
            cart.length > 0 &&
            <>
            <h2 className='totalprice'>total: $ {Totalprice}</h2>
            <button className='checkout'>Checkout</button>
            </>
        }
        </div>
    </div>
  )
}

export default Favorites
