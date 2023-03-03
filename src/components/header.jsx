import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import "../css/header.css"
import ShoppingCart from "../web_images/shopping_cart.svg"
import LogoutButton from "../web_images/logout.svg"
import HeaderMenu from "./header-menu"

export default function Header({cartCount, user, setFilter}) {
    const [visible, setVisible] = useState(false)

    return(
        <div className='header'>
            <div className='header-title'>Food Court</div>
            <div className='header-menu'><span className='menu-button' onClick={() => setVisible(!visible)}>Menu&nbsp;&nbsp;&nabla;</span></div>
            <HeaderMenu visible={visible} setFilter={setFilter} />
            <div className='header-cart'>
                <img src={ShoppingCart}  className='shopping-cart' alt='Error' />
                <span>{cartCount} Items</span>
            </div>
            <div className='header-user-name'>
                <span>Welcome,<br /></span>
                <span>{user}</span>
            </div>
            <div className='header-logout'>
                <img src={LogoutButton} className='logout-button' alt='Error' />
            </div>
        </div>
    )
}