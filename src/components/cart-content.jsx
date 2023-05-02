import React from 'react'
import "../css/cart.css"
import TimeSlow from '../web_images/time-late.png'
import TimeOK from '../web_images/time-ok.png'
import TimeFast from '../web_images/time-fast.png'

const checkSpeed = (BufferQ, CurrOrders, PrepTime, Quantity) => {
    var speed = Math.floor((CurrOrders + Quantity) / BufferQ)*PrepTime
    if(speed < 5)
        return(<div className='box-speed'>{speed} mins <img src={TimeFast} alt='Error' className='box-speed-img' /></div>)
    else if(speed < 15)
        return(<div className='box-speed'>{speed} mins <img src={TimeOK} alt='Error' className='box-speed-img' /></div>)
    else
        return(<div className='box-speed'>{speed} mins <img src={TimeSlow} alt='Error' className='box-speed-img' /></div>)
}

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
                        <div className='content-quantity' >{value.Quantity}</div>
                        <div className='content-price' >{value.Cost}</div>
                        <div className='content-time' >{checkSpeed(value.BufferQ, value.CurrOrders, value.PrepTime, value.Quantity)}</div>
                    </div>
                })}
            </>)
}