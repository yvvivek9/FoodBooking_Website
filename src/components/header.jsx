import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import "../css/header.css"
import ShoppingCart from "../web_images/shopping_cart.svg"
import LogoutButton from "../web_images/logout.svg"
import HeaderMenu from "./header-menu"
import { useNavigate, Link } from 'react-router-dom';

export default function Header({cartCount, user, setFilter}) {
    const [visible, setVisible] = useState(false)
    const foodType = ['Everything', 'Breakfast', 'Lunch', 'Snacks', 'Bakery', 'Beverages']
    const navigate = useNavigate();

    const menuFunction = () => {
        setVisible(!visible)
        var x = document.getElementsByClassName('menu-list-items')
        for(var i = 0; i < x.length; i++){
            x[i].style.margin = '0px'
            console.log(x[i])
        }
    }

    const settFilter = (types) => {
        setFilter(types)
        if(types === 'Everything')
            navigate('/')
        else    
            navigate('/filter')
        setVisible(false)
    }

    return(
        <div className='header'>
            <div className='header-title'>Food Court</div>
            <div className='header-menu'><span className='menu-button' onClick={() => menuFunction()}>Menu&nbsp;&nbsp;&nabla;</span></div>
            <HeaderMenu visible={visible} settFilter={settFilter} foodType={foodType} />
            <div className='header-cart'>
                <Link to='/cart'>
                    <img src={ShoppingCart}  className='shopping-cart' alt='Error' />
                    <span>{cartCount} Items</span>
                </Link>
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