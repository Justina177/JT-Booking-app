import React from 'react';
import room2 from '../../images/room2.jpg'
import room4 from '../../images/room4.jpg'
import room5 from '../../images/room5.jpg';
import room6 from '../../images/room6.jpg';
import room7 from '../../images/room7.jpg'
import './PropertyList.css';
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {

    const { data, loading, error } = useFetch (
        "/hotels/countByType"
    );
    const images = [
        "room2",
        "room4",
        "room5",
        "room6",
        "room7"
    ];
  return (
    <div className="pList">
        {
            loading ? (
                "loading"
            ) : (
        <>
        
        <div className="pListItem">
            <img src={room5} alt="" className="pListImg" />
            <div className="pListTitles">
            <h1>Hotels</h1>
            <h2> 243 hotels</h2>
            </div>
        </div>
        
        

        <div className="pListItem">
            <img src={room2} alt="" className="pListImg" />
            <div className="pListTitles">
            <h1>Apartments</h1>
            <h2> 5043 hotels</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src={room4} alt="" className="pListImg" />
            <div className="pListTitles">
            <h1>Resorts</h1>
            <h2> 2391 hotels</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src={room7} alt="" className="pListImg" />
            <div className="pListTitles">
            <h1>Villas</h1>
            <h2> 3421 hotels</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src={room6} alt="" className="pListImg" />
            <div className="pListTitles">
            <h1>Cabins</h1>
            <h2> 1202 hotels</h2>
            </div>
        </div>
        </>
        )}
    </div>
  );
}

export default PropertyList