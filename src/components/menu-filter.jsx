import React from 'react';
import ReactDOM from 'react-dom/client';
import "../css/menu.css"
import TimeSlow from '../web_images/time-late.png'
import TimeOK from '../web_images/time-ok.png'
import TimeFast from '../web_images/time-fast.png'

export default function menu({menu, filter, addItem, remItem}) {

    const checkSpeed = (BufferQ, CurrOrders, PrepTime, Quantity) => {
        var speed = Math.floor((CurrOrders + Quantity) / BufferQ)*PrepTime
        if(speed < 5)
            return(<div className='box-speed'>{speed} mins <img src={TimeFast} alt='Error' className='box-speed-img' /></div>)
        else if(speed < 15)
            return(<div className='box-speed'>{speed} mins <img src={TimeOK} alt='Error' className='box-speed-img' /></div>)
        else
            return(<div className='box-speed'>{speed} mins <img src={TimeSlow} alt='Error' className='box-speed-img' /></div>)
    }
    
    return(
        <div className='menu'>
            {menu.map((value, index) => {
                if(value.Type === filter)
                    return(
                        <div className='menu-box' key={index}>
                            <img src={require('../food_images/' + value.Name + '.jpg')} className='box-food-img' alt='Error' />
                            <div className='box-details'><span style={{marginLeft: '10px', fontWeight: 600}}>Name:</span><span style={{marginLeft: '30px'}}>{value.Name}</span></div><hr />
                            <div className='box-details'><span style={{marginLeft: '10px', fontWeight: 600}}>Price:</span><span style={{marginLeft: '38px'}}>{value.Cost}</span></div><hr />
                            <div className='box-details' style={{display: 'flex'}}>
                                <div style={{marginLeft: '10px', fontWeight: 600}}>Quantity:</div>
                                <div style={{marginLeft: '35px', display: 'flex', textAlign: 'center'}}>
                                <div className='box-button'><input type='button' value='-' onClick={() => remItem(value.Name)} /></div>
                                <div className='box-quantity'>{value.Quantity}</div>
                                <div className='box-button'><input type='button' value='+' onClick={() => addItem(value.Name)} /></div>
                            </div></div><hr />
                            <div className='box-details' style={{paddingLeft: '90px'}}>{checkSpeed(value.BufferQ, value.CurrOrders, value.PrepTime, value.Quantity)}</div>
                        </div>)
                    })}
        </div>
    )
}