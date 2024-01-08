

const Product = (props) => {
  const {id, pName, pImg, price} = props.data;

  return ( 
    <>
      <div className="col-3">
        <img className="w-100" src={pImg} alt={pImg} />
        <h3>{pName}</h3>
        <h5>price: {price}$</h5>
        <button className="btn btn-primary btn-sm">+</button>
        <span className="mx-1">0</span>
        <button className="btn btn-primary btn-sm">-</button>
      </div>
    </>
   );
}
 
export default Product;