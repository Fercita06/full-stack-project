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
      <h3>{Place_name}</h3>
      <p>{Location}</p>
      <p>{Country}</p>
      <p>{Highlights}</p>
    </div>
  )
}

export default Location