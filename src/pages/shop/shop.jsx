import PRODUCT from "../../data/products";
import Product from "./product";


const Shop = () => {
  return ( 
    <div className="container">
      <h1>Shop</h1>
      <div className="row">
        {PRODUCT.map((p)=>{
          return <Product data={p} key={p.id}/>
        })}
      </div>
    </div>
   );
}
 
export default Shop;