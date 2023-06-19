import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">JustBooking</span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>

    </div>
  )
}

export default Home