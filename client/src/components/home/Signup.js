import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom';

import {Container, Button} from 'reactstrap';
import Footer from "./Footer";
import CustomNavbar from "./CustomNavbar";
import './signup.css';



import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import './Login.css';

class Signup extends Component {

  constructor(){
    super();

    this.state = {
      firstName: '',
      lastName: '',
      userName:'',
      email: '',
      password:'',
      country: '',
      address: '',
      mobile: '',
      secretquestion:'',
      secretanswer:'',
      message:'please register here',
     registered: false
    };

    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  signup=async() => {
   const result = await fetch('/api/users/', {
      method: 'POST',
       headers: {
            'Content-Type': 'application/json;charset=utf-8'
      },
        body: JSON.stringify(this.state)
    });
   const res = await result.json()

  alert('New profile created successfully')

  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value});
   }


  render() {

  return (

  <Container>
  <CustomNavbar/>
    <div className="p-3 my-2 rounded">

      <Toast>
        <ToastHeader>
        <h4>Signup</h4>

        </ToastHeader>
        <ToastBody>
        <p>{this.state.message}</p>
  <form>
            <label htmlFor="firstName">First Name:</label>
            <input id="firstName" name="firstName" placeholder="firstName" onChange={this.onChange} required/>

            <label htmlFor="lastName">Last Name:</label>
            <input id="lastName" name="lastName" placeholder="lastName" onChange={this.onChange} required/>

            <label htmlFor="userName">User Name:</label>
            <input id="userName" name="userName" placeholder="username" onChange={this.onChange} required/>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              placeholder="email@gmail.com"
              type="email"
              onChange={this.onChange}
            required/>
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" placeholder="password" onChange={this.onChange} required/>

            <label htmlFor="country">Country:</label>
            <input id="country" name="country" placeholder="Country"  onChange={this.onChange} required/>
            <label htmlFor="address">Address:</label>
            <input id="address" name="address" placeholder="Address"  onChange={this.onChange} required/>
            <label htmlFor="mobile">Mobile No:</label>
            <input id="mobile" name="mobile" placeholder="Mobile" onChange={this.onChange} required/>
            <label htmlFor="secretquestion">SecretQuestion:</label>
            <input id="secretQuestion" name="secretquestion" placeholder="secretquestion" onChange={this.onChange} required/>
            <label htmlFor="secretanswer">SecretAnswer:</label>
            <input id="secretanswer" name="secretanswer" placeholder="secretanswer" onChange={this.onChange} required/>

            <Button type="submit" color="primary" onClick={this.signup}>Submit</Button>
            <label>You can Login from here!☞</label>
            <a href="/" style={{ marginBottom: '1rem' }}>Login</a>

  </form>
          </ToastBody>
          </Toast>

  </div>
  <Footer/>
  </Container>

     );

  }
}

export default Signup;
