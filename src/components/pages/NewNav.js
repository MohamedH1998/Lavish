import React from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'



const NewNav = () => {
    return (
        <div className="navbar">
           <div className="container navbar-container">
               <Link to="/" className="navbar-logo">LAVISH</Link>
               <span className="menu-icon">
                   <FaTimes/>
               </span>
               </div> 
               <ul className="nav-menu active">
                   <li className="nav-item">
                       <Link to="/" className="nav-links">Home</Link>
                   </li>
                
                </ul> 
        </div>
    )
}

export default NewNav
