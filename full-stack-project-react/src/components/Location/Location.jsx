import "./Location.scss";

const Location = (props) => {
  const {
    name,
    place,
    nationality,
    notes,
  } = props.location;

  return (
    <div className="location">
      <h3>{place} : {nationality}</h3>
      <p>your highlight: {notes}</p>
      <p>Added by: {name}</p>
    </div>
  )
}

export default Location