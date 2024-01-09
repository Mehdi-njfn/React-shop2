import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { shopContext } from "../context/shopContext";
import './nav.css'

const Nav = () => {
  const {cartItems}=useContext(shopContext);
  const itemsCount = cartItems?.reduce((prev, current)=>{
    return prev + current.count;
  },0)
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
              {itemsCount >0 &&<span className="items-count">{itemsCount}</span>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </>  );
}
 
export default Nav;<h1>NAV</h1>