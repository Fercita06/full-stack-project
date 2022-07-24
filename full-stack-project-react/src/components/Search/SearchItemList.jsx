import React,{useState, useEffect} from 'react';
import Location from '../Location/Location';

const SearchItemList = ({ query }) => {

    const [locations, setLocations] = useState([]);
    const url = "https://62dd123057ac3c3f3c6392c1.mockapi.io/Argentinian_places"

    useEffect(()=>{

        fetch(url)
            .then( resp => resp.json())
            .then( data => {
                console.log(data);
                const results = data.filter( loc => loc.Place_name.toLowerCase().includes(query.toLowerCase()));
                setLocations(results);
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