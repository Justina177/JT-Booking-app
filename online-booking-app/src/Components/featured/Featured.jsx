import React from 'react';
import './Featured.css';
import room1 from '../../images/room1.jpg'
import room2 from '../../images/room2.jpg'
import room3 from '../../images/room3.jpg'
import useFetch from '../../hooks/useFetch';

const Featured = () => {

  const { data, loading, error } = useFetch ("/hotels/countByCity?cities=Germany,France,London")
  
  return (
    <div className="featured">
      {loading ? (
      "Loading please wait"
      ) : (
      <>
      <div className="featuredItem">
        <img src={room1} alt="room1" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Germany</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src={room2} alt="room1" className="featuredImg" />
        <div className="featuredTitles">
          <h1>France</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src={room3} alt="room1" className="featuredImg" />
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div>
      </>
      )}

      
    </div>
  );
}

export default Featured