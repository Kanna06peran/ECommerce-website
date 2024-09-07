import React, { useContext, useState,useRef } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import CartIcon from "./Assets/carticon.png" 
import { ShopContext } from './Context/ShopContext'
import nav_dropdown from "./Assets/dropdown_icon.png"
import logo from "../components/Assets/logo.png"

function Navbar() {
    const navigate = useNavigate()
    //const [log,setLog]=useState(false)
    const [menu,setMenu] = useState("shop")
    const {getTotalCartItems}=useContext(ShopContext)
    const menuRef = useRef()
    const dropdown_toggle=(e)=>{
      menuRef.current.classList.toggle("nav-menu-visible")
      e.target.classList.toggle("open")

    }



    
  return (
    <div className='navbar py-5 flex justify-between items-center'>
        <img src={logo} alt=''></img>
        <h2 className='text-2xl font-bold'>SHOPPER</h2>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt=''></img>
        <div ref={menuRef} className='nav-menu flex items-center'>
            
            <Link className='list-none px-5' to={"/home"}>Home</Link>
            <Link onClick={()=>{setMenu("shop")}} className='list-none px-5' to={"/"}>Shop{menu ==="shop"?<hr/>:<></>}</Link>
            <Link onClick={()=>{setMenu("mens")}} className='list-none px-5' to={"/men"}>Men{menu ==="mens"?<hr/>:<></>}</Link>
            <Link onClick={()=>{setMenu("womens")}} className='list-none px-5' to={"/women"}>Women{menu ==="womens"?<hr/>:<></>}</Link>
            <Link onClick={()=>{setMenu("kids")}} className='list-none px-5' to={"/kids"}>Kids{menu ==="kids"?<hr/>:<></>}</Link>
            
        
            <Link onClick={()=>{setMenu("about")}} className='list-none px-5'>About{menu ==="about"?<hr/>:<></>}</Link>

            <div className="nav-login-cart">
              {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>: <Link to='/login'><button className='button-style hidden md:block'>Login</button></Link>}
             
            
            <Link to='/cart'><img className='flex items-center ' src={CartIcon} alt='' style={{height:40,width:50,paddingLeft:10}} ></img></Link>

            </div>
           
            {/* {
              log?<button className='button-style hidden md:block' onClick={logout}>Logout</button>: 
            }
             */}
            
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
              
            
            

           
            
        </div>
    </div>
  )
}

export default Navbar