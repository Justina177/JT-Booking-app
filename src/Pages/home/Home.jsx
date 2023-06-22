import React from 'react'
import Featured from '../../Components/featured/Featured'
import Header from '../../Components/header/Header'
import Navbar from '../../Components/navbar/Navbar'
import './Home.css';
import PropertyList from '../../Components/propertyList/PropertyList'
import FeaturedProperties from '../../Components/featuredProperties/FeaturedProperties';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by propertygit add  type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests Love</h1>
        <FeaturedProperties />
      </div>
    </div>
  )
}

export default Home