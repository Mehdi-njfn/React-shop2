import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
  <>
    <div className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <Link to='/' className="navbar-brand">React Shop</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to='/'className="nav-link">Shop</Link>
          </li>
          <li className="nav-item">
            <Link to='/cart' className="nav-link">
              <FontAwesomeIcon icon={faShoppingCart}/>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </>  );
}
 
export default Nav;<h1>NAV</h1>