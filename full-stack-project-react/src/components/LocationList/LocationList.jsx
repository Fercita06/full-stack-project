import { useEffect, useState } from "react";
import Location from "../Location/Location";
import "./LocationList.scss";

const LocationList = () => {
  //const _baseURL = 'https://62dd123057ac3c3f3c6392c1.mockapi.io';
  const [locations, setLocations] = useState([]);

  const getLocations = async() => {
    try {
      const response = await fetch('http://localhost:8080/places');
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
            <p className="container__paragraph">Loading locations...</p>
        }

      </div>
    </>
  )
}

export default LocationList