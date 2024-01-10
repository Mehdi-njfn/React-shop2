import { Navigate } from "react-router-dom";


const Protect = ({component: Component, ...restProps}) => {
  const isAuth = localStorage.getItem('token');

  if(!isAuth){
    return <Navigate to='/login' />;
  }

  return (
    <Component {...restProps}/>
  );
}
 
export default Protect;