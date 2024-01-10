


const Input = ({name, value, id, onChange, lable}) => {
  return (
  <div className="row my-3 col-12">
    <lable htmlFor={name} className=" w-25">{lable} : </lable>
    <input style={{float:'inline-end', height:'40px'}} className=" w-75" type="text" name={name} value={value} id={id} onChange={onChange} placeholder={name} />
  </div >
  );
}
 
export default Input;