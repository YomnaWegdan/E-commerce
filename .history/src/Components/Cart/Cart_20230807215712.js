import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Cart = ({cart , setCart}) => {

return (
    <div>
        <div className='container'>
        {cart.length === 0 && <h2 className='empty'></h2>}
        <div className='contant'>
            {cart.map((el)=>{
                return(
                    <div className='cart_item' key={el.id}>
                    <div className='img_box'>
                    <img src={el.Img} alt={el.Title}/>
                    </div>
                    <div className='detail'>
                    <h4>{el.Cat}</h4>
                    <h3>{el.Title}</h3>
                    <p>{el.Price}</p>
                    <button><AiOutlineClose/></button>
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
