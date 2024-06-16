import React, { useContext } from 'react'
import './CustomerNavbar.css'
import logo from '../Assets/logo.jpg'
import cart_icon from'../Assets/cart_icon.png'
import {Link} from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import axios from 'axios'



const CustomerNavbar=()=>{

       
       
    return(
       <div>
             
        <div className='navbar'>
        <div className='nav-logo'> 
                <img src={logo}  alt=""/>
             </div>
            
            <div className='nav-login-cart'>
                <Link to='/login'><button>Logout</button></Link>
                <Link to='/getCartItems'><button>Get Cart</button></Link>
                
                
            </div>
        </div>
        </div>
    )
}

export default CustomerNavbar