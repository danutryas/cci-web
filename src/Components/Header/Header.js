import React, { useEffect, useState } from 'react'
import cciLogo from '../Assets/Image/cci-logo.png'
import {HashLink} from 'react-router-hash-link'
import './styles/header.scss'

const Header = () => {
  const [isScrollDown,setIsScrollDown] = useState(false)
  const [scrollPosition,setScrollPosition] = useState(0)
  useEffect(() => {
    const position = window.pageYOffset
    setScrollPosition(position)
  })

  return (
    <div className={`header ${scrollPosition === 0 ? "transparent" : ""} ${scrollPosition ? "hide" : ""}`}>
        <div className="logo">
            <img src={cciLogo} alt="logo" height="80px"/>
        </div>
        <ul className="nav-bar">
            <li className='nav-link'><a href="#home">Home</a></li>
            <li className='nav-link'><a href="#">Divisions</a></li>
            <li className='nav-link'><a href="#">Gallery</a></li>
            <li className='nav-link'><a href="#">News</a></li>
            <li className='nav-link'><a href="#">Organization</a></li>
            <li className='nav-link'><a href="#">Contact</a></li>
            <li className='nav-link'><a href="#">Blog</a></li>
        </ul>
    </div>
  )
}

export default Header