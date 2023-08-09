import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './Cart.css'
import { useAppContext } from '../Context'
const Cart = () => {
    const {cart} = useAppContext();

return (
    <div>
    <div className='cartcontainer'>
    {cart.length === 0 && 
        <div className='emptycart'>
        <h2 className='empty'>Cart is Empty</h2>
        <Link to='/product' className='emptycartbtn'>Shop Now</Link>
        </div>
        }
  
        <div className='contant'>
            {cart.map((el)=>{
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
                    <button className='incqty' onClick={()=> increment(el)}>+</button>
                    <input type='text' value={el.qty}/>
                    <button className='decqty' onClick={()=> decrement(el)}>-</button>

                    </div>   
                    <h4 className='subtotal'>sub total: ${el.Price * el.qty}</h4>
                    </div>
                    <div className='close'>

                    <button><AiOutlineClose/></button>
                    </div>
</div>

                    </div>
                )
            })}

        </div>
        </div>
    </div>
)
}

export default Cart
