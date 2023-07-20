import React from 'react';
import room2 from '../../images/room2.jpg';
import './FeaturedProperties.css';

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItems">
            <img src={room2} alt="" className="fpImg" />
            <span className="fpName">Apartment stare miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from $145</span>
            <div className="fpRating">
                <button className="fpBtn">8.9</button>
                <span>Excellent</span>
            </div>
        </div>

        <div className="fpItems">
            <img src={room2} alt="" className="fpImg" />
            <span className="fpName">Apartment stare miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from $145</span>
            <div className="fpRating">
                <button className="fpBtn">8.9</button>
                <span>Excellent</span>
            </div>
        </div>

        <div className="fpItems">
            <img src={room2} alt="" className="fpImg" />
            <span className="fpName">Apartment stare miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from $145</span>
            <div className="fpRating">
                <button className="fpBtn">8.9</button>
                <span>Excellent</span>
            </div>
        </div>

        <div className="fpItems">
            <img src={room2} alt="" className="fpImg" />
            <span className="fpName">Apartment stare miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from $145</span>
            <div className="fpRating">
                <button className="fpBtn">8.9</button>
                <span>Excellent</span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties