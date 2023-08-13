import React from 'react';
import useFetch from '../../hooks/useFetch';
import room2 from '../../images/room2.jpg';
import './FeaturedProperties.css';

const FeaturedProperties = () => {
    const { data, loading } = useFetch("/hotels?featured=true&limit=4");
  return (
    <div className="fp">
        {loading ? (
            "Loading"
        ) : (
            <>
            {data.map((item) => (
            <div className="fpItems" key={item._id}>
                <img src={item.photos[0]} alt="" className="fpImg" />
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">Starting from ${item.ceapestPrice}</span>
                {item.rating && <div className="fpRating">
                    <button className="fpBtn">{item.rating}</button>
                    <span>Excellent</span>
                </div>}
            </div>

            ))}
            </>
        )}
    </div>
  )
}

export default FeaturedProperties