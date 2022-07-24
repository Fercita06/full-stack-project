import "./Nav.scss";
import { Link } from "react-router-dom";
import SearchWidget from '../Search/SearchWidget';
const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav-menu__item" to="/">
        Home
      </Link>

      <Link className="nav-menu__item" to="/places">
        Places to visit
      </Link>

      <SearchWidget />
    </div>
  )
}

export default Nav