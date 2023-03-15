import React from 'react'
import "../css/cart.css"
import CartContent from './cart-content'

export default function Cart({menu, cartCount, addItem, remItem}) {
    
    
    return(
        <div className='cart'>
            <CartContent menu={menu} cartCount={cartCount} addItem={addItem} remItem={remItem} />
        </div>
    )
}