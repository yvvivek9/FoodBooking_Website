import React from 'react'
import "../css/cart.css"

export default function CartContent({menu, cartCount, addItem, remItem}) {
    if(cartCount === 0)
            return(<div className='your-order'>No Orders Found</div>)
        else    
            return(
                <>
                <div className='your-order' >Your Cart</div>
                {menu.map((value, index) => {
                if(value.Quantity !== 0)
                    return <div className='cart-content' key={index} >
                        <div className='content-img' ><img src={require('../food_images/' + value.Name + '.jpg')} className='cart-food-img' alt='error' /></div>
                        <div className='content-name'>{value.Name}</div>
                        <div className='content-quantity' ></div>
                        <div className='content-price' ></div>
                        <div className='content-time' ></div>
                    </div>
                })}
            </>)
}