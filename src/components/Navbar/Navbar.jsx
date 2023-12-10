import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../assests/logo.png'
import card_icon from '../assests/cart_icon.png'
import { ShopContext } from '../../context/ShopContext'
const Navbar = () => {
  const {qn} = useContext(ShopContext)
  const [menu,setmenu] = useState("shop");
  return (
    <div className='Navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Leo</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setmenu("shop")}} ><Link to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("men")}} ><Link to="/men">Men</Link>{menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("women")}} ><Link to="/Women">Women</Link>{menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("kids")}} ><Link to="/Kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"> <button>Login</button> </Link>
        <Link to="/cart"><img src={card_icon} alt="" /></Link>
        <div className="nav-cart-count">{qn()}</div>
      </div>
    </div>
  )
}

export default Navbar
