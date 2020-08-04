import React, {Component}  from "react";
import { Nav, Navbar, Form, FormControl} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Button,Badge } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class CustomNavbar extends Component {

    constructor(){
      super();
    const username = localStorage.getItem("username")


    this.state={
username: username
    }
  }
render (){
let user = this.state;
    return ( <Navbar bg = "info"
        expand = "lg"
        sticky = "top"
        variant = "dark" >
        <
        Navbar.Brand href = "#home" > Driving - License - App < /Navbar.Brand> <
        Navbar.Toggle aria-controls = "basic-navbar-nav"/>
        <Navbar.Collapse id = "basic-navbar-nav" >
        <Nav className = "mr-auto">
        <Nav.Link href = "/" active>
        Home <
        /Nav.Link> <
        Nav.Link href = "/tutorials" > Tutorial < /Nav.Link> <
        Nav.Link href = "/freetest" > Take Practice Test < /Nav.Link> <
        Nav.Link href = "#contact" > Contact Us < /Nav.Link> <
        /Nav>
        <Badge color="primary"> WelCome..{user.username} 🇹🇷</Badge>

         <a href="/logout" class="danger"> Logout</a>
       <
        /Navbar.Collapse> <
        /Navbar>
    );
}}

export default CustomNavbar;
