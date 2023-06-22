import React from 'react'
import Featured from '../../Components/featured/Featured'
import Header from '../../Components/header/Header'
import Navbar from '../../Components/navbar/Navbar'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <Featured />

      </div>
    </div>
  )
}

export default Home