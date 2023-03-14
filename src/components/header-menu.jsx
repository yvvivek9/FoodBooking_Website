import React, {useState} from 'react'
import '../css/header.css'


export default function HeaderMenu({visible, settFilter, menu}) {

    return(
        <>
            {visible && <div className='menu-list'>
                {menu.map((value, index) => {
                    return (<div className='menu-list-items' onClick={() => settFilter(value)} key={index} >{value}</div>)
                })}
            </div>}
        </>
    )
}