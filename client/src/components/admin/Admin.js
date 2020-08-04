import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Cards from "../home/Cards";
import Footer from "../home/Footer";
import CustomNavbar from "./CustomNavbar";

class Admin extends Component {
  constructor(props) {
    super(props)
    const token = localStorage.getItem("token")
   let loggedIn = true
   if(token==null){
     loggedIn=false
   }
    this.state = {
      testId: '',
      title: '',
      duration: '',
      questions: '',
      loggedIn
    }

  }

  componentDidMount() {
//getTests;
}
  getTests=async() => {
      const result = await fetch('/api/tests/testtypes');
         const values = await result.json();
      const data = JSON.stringify(values);
alert(data);        //  alert(this.state);
}

    render() {
      if(this.state.loggedIn === false){
return <Redirect to="/"/>
      }
      return(
    <div>
    <CustomNavbar/>
    <Cards/>
    <Footer/>
  </div>



        );
    }
}

export default Admin;
