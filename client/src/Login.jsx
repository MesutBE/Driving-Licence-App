import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Container, Button} from 'reactstrap';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import Footer from "./components/home/Footer";
import CustomNavbar from "./components/home/CustomNavbar";
import './Login.css';

class Login extends Component {

  constructor(){
    super();

    this.state = {
     username: '',
     password: '',
     loggedIn: false
    };

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);

  }


  login=async() => {

    const values = this.state
    const result = await fetch('/api/users/login', {
       method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
       body: JSON.stringify(values)
   });
   const data = await result.json();

    if (result.status === 200 && data.length !== 0) {
  localStorage.setItem("token", "webwinnersloggedin");
  sessionStorage.setItem('values',data)
      this.setState({ loggedIn: true });
}


  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value});
   }


  render() {


    if (this.state.loggedIn=== true || sessionStorage.getItem('values') !== null) {

      return (<Redirect to={'/admin'} />)

    }
    else {
      return (
        <Container>
          <CustomNavbar />
          <div className="p-3 my-2 rounded">

            <Toast>
              <ToastHeader>
                <h4>Login</h4>
              </ToastHeader>
              <ToastBody>
                <label>Username</label>
                <input type="text" name="username" placeholder="Username" onChange={this.onChange} />
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" onChange={this.onChange} />
                <input type="submit" className="button success" value="Login" onClick={this.login} />
                <a href="/signup">Registration</a>
              </ToastBody>
            </Toast>

          </div>
          <Footer />
        </Container>

      );
    }
  }
}

export default Login;
