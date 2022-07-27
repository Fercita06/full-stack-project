import "./Location.scss";

const Location = (props) => {
  const {
    place_name,
    location,
    country,
    highlights
  } = props.location;

  return (
    <div className="container">
      <div className="container__location">
        <h3 className="location_place">{place_name}</h3>
        <p className="location_location">{location}</p>
        <p className="location_country">{country}</p>
        <p className="location_highlights">{highlights}</p>
      </div>
    </div>
  )
}

export default Location