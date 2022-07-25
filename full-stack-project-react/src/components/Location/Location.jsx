import "./Location.scss";

const Location = (props) => {
  const {
    Place_name,
    Location,
    Country,
    Highlights
  } = props.location;

  return (
    <div className="location">
      <h3 className="location_place">{Place_name}</h3>
      <p className="location_location">{Location}</p>
      <p className="location_country">{Country}</p>
      <p className="location_highlights">{Highlights}</p>
    </div>
  )
}

export default Location