import "./Nav.scss";
import { Link } from "react-router-dom";
import SearchWidget from "../Search/SearchWidget";
const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav__menu-item hoover" to="/">
        Home
      </Link>

      <Link className="nav__menu-item hoover" to="/places">
        Places to visit
      </Link>

      <SearchWidget />
    </div>
  );
};

export default Nav;
