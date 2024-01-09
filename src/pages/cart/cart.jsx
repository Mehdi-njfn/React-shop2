import { useContext } from "react";
import { shopContext } from "../../context/shopContext";
import Product from "../shop/product";
import PRODUCT  from "../../data/products";


const Cart = () => {
  const {cartItems} = useContext(shopContext);
  
  return ( 
    <>
      <h1>your cart:</h1>
      <div className="row ">
        {PRODUCT.map((p)=>{
            if( cartItems?.some((i)=> i.id===p.id && i.count >0))
              return <Product data={p}></Product> 
          })

        }
      </div>
    </>

   );
}
 
export default Cart;