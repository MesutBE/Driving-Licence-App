import React, {Component}  from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import {Redirect} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

class CustomNavbar extends Component {

    constructor(){
      super();
    const token = localStorage.getItem("token")
      let loggedIn = true
    if(token==null){
      loggedIn=false
      }
      this.state = {
        username:'',
        password:'',
        loggedIn
      }

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
 localStorage.setItem("token", "webwinnersloggedin")
 localStorage.setItem("username",this.state.username);
 sessionStorage.setItem('token',JSON.stringify(data))
     this.setState({ loggedIn: true });
}



 }

 onChange(e){
   this.setState({[e.target.name]:e.target.value});
  }
  render(){
      if (this.state.loggedIn=== true || localStorage.getItem("token") !== null) {
         return (<Redirect to='/admin' />)


  }

else

  return (
    <Navbar bg="info" expand="lg" sticky="top" variant="dark">
      <Navbar.Brand href="#home">Driving-License-App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" active>
            Home
          </Nav.Link>
          <Nav.Link href="/tutorials">Tutorials</Nav.Link>
          <Nav.Link href="/freetest">Take Practice Test</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>

        <Form inline>

          <FormControl
            type="text"
            name="username"
            value={this.username}
            placeholder="User Name"
            className="mr-sm-2"
          onChange={this.onChange}/>
          <FormControl type="password" name="password" value={this.password}placeholder="Password" className="mr-sm-2" onChange={this.onChange}/>
          <Button variant="success" onClick={this.login}>Log In</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );

}
}

export default CustomNavbar;
