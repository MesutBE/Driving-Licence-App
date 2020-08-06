import React,{Component}from "react";
import { Nav, Navbar, Form, FormControl, Button,Badge } from "react-bootstrap";
import {Redirect} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./LoginComponent";

class CustomNavbar extends Component {

    constructor(){
      super();
    const token = localStorage.getItem("token")
    const username = localStorage.getItem("username")

      let loggedIn = true
    if(token==null){
      loggedIn=false

      }
      this.state = {
        username:username,
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
     this.setState({ loggedIn: true});
}
}

 onChange(e){
   this.setState({[e.target.name]:e.target.value});
  }
  render() {
let account = this.state;
  if (this.state.loggedIn=== true || localStorage.getItem("token") !== null) {
         return (
           <Navbar
             style={{
               backgroundColor: "rgba(55, 61, 73, 0.975)",
               marginBottom: "200px",
             }}
             expand="lg"
             fixed="top"
             variant="dark"
             className="mb-5"
           >
             <Navbar.Brand href="/" active="true">
               WebWinners
             </Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">
                 <Nav.Link href="/tutorials">Tutorials</Nav.Link>
                 <Nav.Link href="/tests">Take Test</Nav.Link>
                 <Nav.Link href="/contactUs">Contact Us</Nav.Link>
               </Nav>
             <h2><Badge color="primary" style={{textTransform: 'capitalize'}}> WelCome..{account.username} 🇷</Badge></h2>
           <Button variant="danger" href="/logout">logout</Button>

             </Navbar.Collapse>
           </Navbar>

         )
  }

else

  return (
    <Navbar
      style={{
        backgroundColor: "rgba(55, 61, 73, 0.975)",
        marginBottom: "200px",
      }}
      expand="lg"
      fixed="top"
      variant="dark"
      className="mb-5"
    >
      <Navbar.Brand href="/" active="true">
        WebWinners
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/tutorials">Tutorials</Nav.Link>
          <Nav.Link href="/tests">Take Practice Test</Nav.Link>
          <Nav.Link href="/contactUs">Contact Us</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
          type="text"
         name="username"
         value={this.username}
            placeholder="User Name"
            className="mr-sm-2"
          onChange={this.onChange} required/>
          <FormControl type="password" name="password" value={this.password} placeholder="Password" className="mr-sm-2"  onChange={this.onChange} required/>
          <Button variant="success" onClick={this.login}>Log In</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}}

export default CustomNavbar;
