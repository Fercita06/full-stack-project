import { useEffect, useState } from "react";
import Location from "../Location/Location";
import "./LocationList.scss";

const LocationList = (props) => {
  const _baseURL = 'https://62dd123057ac3c3f3c6392c1.mockapi.io';
  const [locations, setLocations] = useState([]);

  const getLocations = async() => {
    try {
      const response = await fetch(`${_baseURL}/Argentinian_places`);
      const data = await response.json();
      setLocations(data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    getLocations();
  },[])

  return (
    <>
      <h2 className="heading">Best places to visit in Argentina...</h2>
      <div className="container">

        {
          locations.length > 0 ? 
            (locations.map( loc => {
              return( <Location key={loc.id} location={loc} />)
            })) :
            <p>Loading locations...</p>
        }

      </div>
    </>
  )
}

export default LocationList