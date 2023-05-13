import { NavLink, Link } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          GKeys
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to={"/category/PC"} className="nav-link">
                PC
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/category/PS"} className="nav-link">
                PS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/category/XBOX"} className="nav-link">
                XBOX
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/category/SWITCH"} className="nav-link">
                SWITCH
              </NavLink>
            </li>
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
