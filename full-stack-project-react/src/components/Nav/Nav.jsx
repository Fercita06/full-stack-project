import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav-menu__item" to="/">
        Home
      </Link>

      <Link className="nav-menu__item" to="/location">
        Places to visit
      </Link>

      <Link className="nav-menu__item" to="/locationList">
        Add your place
      </Link>
    </div>
  )
}

export default Nav