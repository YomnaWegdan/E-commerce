import React from 'react'

const Cart = ({cart , setCart}) => {

return (
    <div>
        <div className='container'>
        <div className='contant'>
            {cart.map((el)=>{
                return(
                    <div className='cart_item'>
                    <div className=''></div>

                    </div>
                )
            })}

        </div>
        </div>
    </div>
)
}

export default Cart
