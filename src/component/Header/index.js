import React from 'react'
import "./style.scss"
import window from "../../assets/images/window.png"
import andriod from "../../assets/images/android.png"
import apple from "../../assets/images/apple.png"
import cart from "../../assets/images/shopping-cart.png"
import  search from "../../assets/images/search.png"
import  menu from "../../assets/images/list.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <div className='nav-wraper'>
                <div className='nav-left'>
                    <div className='free-shipping'>
                        Free Ground Shipping Over $250
                    </div>
                    <span className="divider" ></span>
                    <div className='free-social'>
                        Download App
                    </div>
                    <span className='free-social-icon'><img src={apple} alt='pic' width='20px' height='20px' /></span>
                    <span className='free-social-icon'><img src={andriod} alt='pic' width='20px' height='20px' /></span>
                    <span className='free-social-icon'><img src={window} alt='pic' width='20px' height='20px' /></span>
                </div>
                <div className='nav-right'>
                    <div>
                        English
                    </div>
                    <div>
                        USD
                    </div>
                </div>
            </div>
            <div className='header-nav'>
                <div className='logo'>
                    <img src={cart} alt='logo' width='50px' height='50px' />
                </div>
                <div className='category-nav'>
                <Link to='/men'><span>MEN</span></Link>
                    <Link to='/women'><span>WOMEN</span></Link>
                </div>
                <div className='cart-wrapper'>
                    <span className='free-social-icon'><img src={search} alt='pic' width='20px' height='20px' /></span>
                    <span>Wishlist</span>
                    <span>Cart</span>
                    <span>Account</span>
                    <span className='free-social-icon menu-icon'><img src={menu} alt='pic' width='20px' height='20px' /></span>
                </div>

            </div>
        </>
    )
}

export default Navbar