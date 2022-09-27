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
            <li className='nav-link'><a href="#divisions">Divisions</a></li>
            <li className='nav-link'><a href="#products">Products</a></li>
            <li className='nav-link'><a href="#gallery">Gallery</a></li>
            <li className='nav-link'><a href="#news">News</a></li>
            <li className='nav-link'><a href="#organization">Organization</a></li>
            <li className='nav-link'><a href="#contact">Contact</a></li>
            <li className='nav-link'><a href="#blog">Blog</a></li>
        </ul>
    </div>
  )
}

export default Header