import CartWidget from "./CartWidget"
import { NavLink, Link } from "react-router-dom"

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <Link to='/' className="navbar-brand m-x">GKeys</Link>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active px-4">
        <NavLink to={'/category/PC'}>PC</NavLink>
        </li>
        <li class="nav-item px-4">
        <NavLink to={'/category/PS'}>PS</NavLink>
        </li>
        <li class="nav-item px-4">
        <NavLink to={'/category/XBOX'}>XBOX</NavLink>
        </li>
        <li class="nav-item px-4">
        <NavLink to={'/category/SWITCH'}>SWITCH</NavLink>
        </li>
      </ul> 
      <CartWidget />  
    </div>    
  </nav>
  )
}
export default NavBar