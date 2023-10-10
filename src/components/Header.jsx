import { Link, NavLink } from "react-router-dom";
import Logo from "../logo.svg";

const Header = () => {
  const activeStyle = {
    color: "#2089EF",
    fontWeight: 700,
  };

  return (
    <div className="header-wrap">
      <div className="header-top">
        <ul>
          <li>
            <NavLink
              className="header-nav-item"
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/movie"
            >
              Movie
            </NavLink>
          </li>
          <li>
            <NavLink
              className="header-nav-item"
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/series"
            >
              Series
            </NavLink>
          </li>
          <li>
            <NavLink
              className="header-nav-item"
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/episode"
            >
              Episode
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="header-bottom">
        <Link
          to="/"
          style={{ textDecoration: "none" }}
        >
          <img className="logo" src={Logo} alt="logo" width={70} height={70} />
          <span className="title">
            <b>Eroon Movies</b>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
