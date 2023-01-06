import image from "../abc.png"
import "./navbar.css"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div>
    <div className="nav">
<input type="checkbox" id="nav-check"/>
<div className="nav-header">
  <div className="nav-title">

    <img src={image} alt='img'/>
  </div>
</div>
<div className="nav-btn">
  <label for="nav-check">
    <span></span>
    <span></span>
    <span></span>
  </label>
</div>

<div className="nav-links">
  {/* <Link to='/'>
  <h3>Home</h3>
  </Link> */}
  <Link to='/form'>
  <h3>Register</h3>
  </Link>
</div>
</div>
</div>
  )
}

export default NavBar