import { Component } from "react";
import Input from '../../component/input';
import * as yup from 'yup';
import axios from "axios";
import { Link } from "react-router-dom";


class Login extends Component {
  state = {
    account:{
      email:'',
      password:''
    },
    errors:[],
    sending: false
  } 
  schema = yup.object().shape({
    email: yup.string().email().required('Email cant empty.'),
    password: yup.string().min(8, 'Password shoulde be 8 char.')
  })
  validate = async()=>{
    try {
      const result = await this.schema.validate(this.state.account, {abortEarly: false})
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      this.setState({errors: error.errors})
      
    }
  }

  err=()=>{
    if(this.state.errors.length === 0)
      return false;
    else return true;
  }
  handleSubmite= async(e)=>{
    e.preventDefault();
    const result = await this.validate();
    if(result){
      try {
        this.setState({sending:true});
        const response = await axios.post('https://reqres.in/api/login', result);
        this.setState({sending: false});
        console.log('logined');
        localStorage.setItem('token', response.data.token)
        window.location="/dashboard";
      } catch (error) {
        this.setState({sending: false});
        this.setState({errors:['user existed or email and password incorrect.']})
        
      }
    }
    
  }
  
  handleChange = (e)=>{
    const input = e.currentTarget;
    const account = {...this.state.account};
    account[input.name] = input.value;
    this.setState({account});
  }
  render() { 
    const {email , password}=this.state.account;
    return (
      <form onSubmit={this.handleSubmite} className="container w-50 ">
        <h2 className="row w-100 mt-5" style={{float:'left', margin:'5px'}}>Login :</h2>
        <div className="row container align-items-center d-flex col-9">
          {this.err() && <div className="alert alert-danger w-75 mx-5 my-3 ">
            <label className="row" style={{float:'inline-start'}}>errors:</label>
            <ul className="row">{this.state.errors.map((e, i)=> <li key={i}>{e}</li>)}</ul>
            </div>
          }
          <Input name={'email'} lable={'Email'} value={email} id={'email'} onChange={this.handleChange} />
          <Input name={'password'} lable={'Password'} value={password} id={'password'} onChange={this.handleChange} />
        </div>
        <button disabled={this.state.sending} className="btn btn-success btn-lg">Submit</button>
        <Link className="m-3 " to='/register'>Register</Link>
      </form>
    );
  }
}
 
export default Login;