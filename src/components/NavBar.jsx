import { NavLink, Link } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to='/' className="navbar-brand m-x">GKeys</Link>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active px-4">
        <NavLink to={'/category/PC'}>PC</NavLink>
        </li>
        <li className="nav-item px-4">
        <NavLink to={'/category/PS'}>PS</NavLink>
        </li>
        <li className="nav-item px-4">
        <NavLink to={'/category/XBOX'}>XBOX</NavLink>
        </li>
        <li className="nav-item px-4">
        <NavLink to={'/category/SWITCH'}>SWITCH</NavLink>
        </li>
      </ul> 
        <CartWidget />
    </div>    
  </nav>
  )
}

export default NavBar