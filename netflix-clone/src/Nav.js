import React , { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if(window.scrollY > 100) {
            handleShow(true);
        }else handleShow(false);
      })
      return () => {
        window.removeEventListener("scroll",()=>{});
      };
    }, [])
    
  return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
            className='nav__logo'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png?20190206123158"
            alt="Netflix Logo"
            />
            <img
            className='nav__avatar'
            src="https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
            alt="Netflix Logo"
            />
        </div>
        
  )
}

export default Nav