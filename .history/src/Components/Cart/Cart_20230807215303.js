import React from 'react'

const Cart = ({cart , setCart}) => {

return (
    <div>
        <div className='container'>
        <div className='contant'>
            {cart.map((el)=>{
                return(
                    <div className='cart_item'>
                    <div className='img_box'>
                    <img src={el.Img} alt={el.Title}/>
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
