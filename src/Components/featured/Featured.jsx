import React from 'react';
import './Featured.css';
import room1 from '../../images/room1.jpg'
import room2 from '../../images/room2.jpg'
import room3 from '../../images/room3.jpg'
// import room4 from '../../images/room4.jpg'


const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={room1} alt="room1" className="featuredImg" />
        <div className="featuredTitles">
        <h1>Dublin</h1>
        <h2>231 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src={room2} alt="room1" className="featuredImg" />
        <div className="featuredTitles">
        <h1>Austin</h1>
        <h2>172 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src={room3} alt="room1" className="featuredImg" />
        <div className="featuredTitles">
        <h1>Karu Site</h1>
        <h2>343 properties</h2>
        </div>
      </div>

      {/* <div className="featuredItem">
        <img src={room4} alt="room1" className="featuredImg" />
        <div className="featuredTitles">
        <h1>Maitama</h1>
        <h2>286 properties</h2>
        </div>
      </div> */}
    </div>
  )
}

export default Featured