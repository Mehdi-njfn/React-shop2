import { createContext, useState } from "react";



export const shopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);


  const add = (itemId)=>{
    if(!cartItems?.find((i)=>i.id===itemId))
      setCartItems([...cartItems, {id: itemId, count: 1}]);
    else
      setCartItems(cartItems.map((i)=>{
        if(i.id === itemId)
          return {...i, count: i.count + 1}
        else return i;
      })) 
      console.log(cartItems);
  }

  const remove = (itemId)=>{
    setCartItems(cartItems.map((i)=>{
      if(i.id===itemId)
        return{...i, count : i.count===0 ? 0 : i.count - 1 };
      else return i;
    }))

  }

  const values = {cartItems, add, remove}
  return ( 
    <shopContext.Provider value={values}>{props.children}</shopContext.Provider>
   );
}
 
// export default ShopContextProvider;