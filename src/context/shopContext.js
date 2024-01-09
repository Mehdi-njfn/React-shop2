import { createContext, useState } from "react";



export const shopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState();


  const add = ()=>{

  }

  const remove = ()=>{

  }

  const values = {cartItems, add, remove}
  return ( 
    <shopContext.Provider value={values}>{props.children}</shopContext.Provider>
   );
}
 
// export default ShopContextProvider;