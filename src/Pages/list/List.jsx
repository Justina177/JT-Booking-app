import React, { useState } from 'react';
import './List.css';
import Navbar from '../../Components/navbar/Navbar';
import Header from '../../Components/header/Header';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, seOptions] = useState(location.state.options)
  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input 
              type="text" 
              placeholder={destination}
              />
            </div>

            <div className="lsItem">
              <label htmlFor="">Check-in-Date</label>
              <span onClick={() =>setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} 
                to ${format(date[0].endDate, "MM/dd/yyy")}`}
              </span>
              {openDate && (
              <DateRange 
              onChange={items=>setDate([items.selection])}
              minDate={new Date()}
              ranges={date}
              />
              )}
            </div>
            <div className="lsItem">
              <label htmlFor="">Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Price <small>Per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max Price <small>Per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Adult
                  </span>
                  <input 
                    min={1}
                    type="number" 
                    className="lsOptionInput" 
                    placeholder={options.adult}
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Children
                  </span>
                  <input 
                  min={0}
                    type="number" 
                    className="lsOptionInput" 
                    placeholder={options.children}
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Room
                  </span>
                  <input
                  min={1} 
                  type="number" className="lsOptionInput" />
                </div>
              </div>            
            </div>
            <button className="lsSearchBtn">Search</button>

            
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  )
}

export default List