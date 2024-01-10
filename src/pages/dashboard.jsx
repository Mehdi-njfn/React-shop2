import { useContext } from "react";
import { shopContext } from "../context/shopContext";



const Dashboard = () => {
  const {isAuth} = useContext(shopContext);

  return ( 
    <>
      <h1>dashboard</h1>
    </>
   );
}
 
export default Dashboard;