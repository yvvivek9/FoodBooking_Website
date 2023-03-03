import React, {useState} from 'react'


export default function HeaderMenu({visible, setFilter}) {

    return(
        <>
            {visible && <div className='header-menu'>
                <div onClick={() => setFilter("Breakfast")}>HI</div>
            </div>}
        </>
    )
}