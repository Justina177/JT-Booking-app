import React from 'react'
import Featured from '../../Components/featured/Featured'
import Header from '../../Components/header/Header'
import Navbar from '../../Components/navbar/Navbar'
import './Home.css';
import PropertyList from '../../Components/propertyList/PropertyList'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by prpoerty type</h1>
        <PropertyList />
      </div>
    </div>
  )
}

export default Home