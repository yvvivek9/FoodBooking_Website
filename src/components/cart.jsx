import React from 'react'
import "../css/cart.css"

export default function Cart({menu, cartCount, addItem, remItem}) {
    const checkOrders = () => {
        if(cartCount === 0)
            return(<h1>No Orders Found</h1>)
        else    
            return(
                <>
                <div className='your-order' >Your Orders</div>
                {menu.map((value, index) => {
                if(value.Quantity != 0)
                    return <div className='cart-content' key={index} >
                        <div><img src={require('../food_images/' + value.Name + '.jpg')} className='cart-food-img' /></div>
                    </div>
                })}
            </>)
    }
    
    return(
        <div className='cart'>
            {checkOrders()}
        </div>
    )
}