import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";


const Well = () => {
  const [showW, setShowW]= useState();
  
  useEffect(()=>{
    const data = localStorage.getItem('show-wellcome');
    setShowW(JSON.parse(data) ?? true);
  })
  const show =()=>{
    localStorage.setItem('show-wellcome', JSON.stringify(false))
    setShowW(false);
  }
  return ( 
    <>
      {showW && <div className="container">
       <div className="bg-primary my-2 py-1 text-white">
        <FontAwesomeIcon onClick={show} icon={faClose} style={{float:'right', margin:'5px'}}/>
        <h2 className="my-3">wellcom</h2>
      </div>
    </div>
}
    </>
   );
}
 
export default Well;
