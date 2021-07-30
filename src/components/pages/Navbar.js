import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {MdFingerprint} from 'react-icons/md'
import {FaBars, FaTimes} from 'react-icons/fa'
import Button from './Button'
import './Navbar.css'
import { IconContext} from 'react-icons/lib' 

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)


    const handleClick = () =>   setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }
    useEffect(() => {
        showButton()
    }, [])
    window.addEventListener('resize', showButton)
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <div className="navbar">
        <div className="container navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            elixir
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes/> : <FaBars/>}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="navitem">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                     Products
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                        My Account
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                        Cart
                    </Link>
                </li>

            </ul>

        </div>
        </div>
        </IconContext.Provider> 
        </>
    )
}

export default Navbar