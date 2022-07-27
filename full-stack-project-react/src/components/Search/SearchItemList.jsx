import React,{useState, useEffect} from 'react';
import Location from '../Location/Location';

const SearchItemList = ({ query }) => {

    const [locations, setLocations] = useState([]);
    //const url = "https://62dd123057ac3c3f3c6392c1.mockapi.io/Argentinian_places"

    useEffect(()=>{

        fetch("http://localhost:8080/places")
            .then( resp => resp.json())
            .then( data => {
               
                const results = data.filter( loc => loc.location.toLowerCase().includes(query.toLowerCase()));
                setLocations(results);
                
                console.log(results);
            })
            .catch( error => console.error(error) );

    },[query]);


    return (
    <div>

        {
            locations.length ?

                (locations.map( loc => {

                    return(
                        <Location key={loc.id} location={loc} />
                    )

                })
                
                )

            :<p> Loading places... </p>

        }
    </div>
  )
}

export default SearchItemList