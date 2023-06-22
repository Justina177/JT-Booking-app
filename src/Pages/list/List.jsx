import React from 'react';
import './List.css';
import Navbar from '../../Components/navbar/Navbar';
import Header from '../../Components/header/Header';

const List = () => {
  return (
    <div>
      <Navbar />
      <Header type="list"/>
    </div>
  )
}

export default List