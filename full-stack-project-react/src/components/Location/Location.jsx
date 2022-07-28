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
      <div className="container__card">
      <h3 className="container_place">{place_name}</h3>
      <p className="container_location">{location}</p>
      <p className="container_country">{country}</p>
      <p className="container_highlights">{highlights}</p>
      </div>
    </div>
  )
}

export default Location