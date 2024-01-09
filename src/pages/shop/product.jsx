import { useContext } from "react";
import { shopContext } from "../../context/shopContext";


const Product = (props) => {
  const {id, pName, pImg, price} = props.data;
  const {cartItems, add, remove}=useContext(shopContext);
  const isIncart = cartItems?.some((i)=>i.id===id);
  return ( 
    <>
      <div className="col-3">
        <img className="w-100" src={pImg} alt={pImg} />
        <h3>{pName}</h3>
        <h5>price: {price}$</h5>
        <button onClick={()=>add(id)} className="btn btn-primary btn-sm">+</button>
        <span className="mx-1">{cartItems?.filter((row)=> row.id===id)[0]?.count}</span>
        {isIncart && <button onClick={()=>remove(id)} className="btn btn-primary btn-sm">-</button>}
      </div>
    </>
   );
}
 
export default Product;