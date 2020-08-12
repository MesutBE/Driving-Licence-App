import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom';
import CustomNavbar from "../home/CustomNavbar";
import Footer from "../home/Footer";
import Tips from "./Tips";
import './style.css';


class RegisterForm extends Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["firstName"] = "";
          fields["lastName"] = "";
          fields["userName"] = "";
          fields["email"] = "";
          fields["password"] = "";
          fields["country"] = "";
          fields["address"] = "";
          fields["mobile"] = "";
          fields["secretquestion"] = "";
          fields["secretanswer"] = "";
          this.setState({fields:fields});

          const res = fetch('/api/users/', {
             method: 'POST',
              headers: {
                   'Content-Type': 'application/json;charset=utf-8'
             },
               body: JSON.stringify(this.state.fields)
           }).then((res) => res.json());
      localStorage.setItem("token", "webwinnerstoken");
      localStorage.setItem("username", this.state.fields.userName);



        //  alert(JSON.stringify(this.state.fields));
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
      if (!fields["firstName"]) {
        formIsValid = false;
        errors["firstName"] = "*Please enter your first name.";
      }

      if (typeof fields["firstName"] !== "undefined") {
        if (!fields["firstName"].match(/^[a-zA-Z ]/)) {
          formIsValid = false;
          errors["firstName"] = "*Please enter text or alphabet only.";
        }
      }


      if (!fields["lastName"]) {
        formIsValid = false;
        errors["lastName"] = "*Please enter your last name.";
      }

      if (typeof fields["lastName"] !== "undefined") {
        if (!fields["lastName"].match(/^[a-zA-Z ]/)) {
          formIsValid = false;
          errors["lastName"] = "*Please enter text or alphabet only.";
        }
      }
      if (!fields["userName"]) {
        formIsValid = false;
        errors["userName"] = "*Please enter your username.";
      }

      if (typeof fields["userName"] !== "undefined") {
        if (!fields["userName"].match(/^[a-zA-Z ]/)) {
          formIsValid = false;
          errors["userName"] = "*Please enter alphabet and *$ characters only.";
        }
      }

      if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "*Please enter your email-ID.";
      }

      if (typeof fields["email"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["email"])) {
          formIsValid = false;
          errors["email"] = "*Please enter valid email-ID.";
        }
      }

            if (!fields["password"]) {
              formIsValid = false;
              errors["password"] = "*Please enter your password.";
            }

            if (typeof fields["password"] !== "undefined") {
              if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "Minimum 8 characters in length( Contains Lowercase Letters, Uppercase Letters and Symbols)";
              }
            }
      if (!fields["secretquestion"]) {
          formIsValid = false;
          errors["secretquestion"] = "*Please enter your secretquestion.";
        }

        if (typeof fields["secretquestion"] !== "undefined") {
          if (!fields["secretquestion"].match(/^[a-zA-Z ]/)) {
            formIsValid = false;
            errors["secretquestion"] = "*Please enter text or alphabet only.";
          }
        }

              if (!fields["secretanswer"]) {
                formIsValid = false;
                errors["secretanswer"] = "*Please enter your secretanswer.";
              }

              if (typeof fields["secretanswer"] !== "undefined") {
                if (!fields["secretanswer"].match(/^[a-zA-Z ]/)) {
                  formIsValid = false;
                  errors["secretanswer"] = "*Please enter text or alphabet only.";
                }
              }


      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
  if (localStorage.getItem("token") !== null) {
      return (<Redirect to = '/' />)
    }
    else
    return (
    <div id="main-registration-container">
    <CustomNavbar />

     <div id="register">
        <h3>User Registration</h3>
        <p className="required">* are mandatory fields</p>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label>First Name:<span className="required">*</span></label>
        <input type="text" name="firstName" value={this.state.fields.firstName} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.firstName}</div>
        <label>Last Name:<span className="required">*</span></label>
        <input type="text" name="lastName" value={this.state.fields.lastName} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.lastName}</div>
        <label>User Name:<span className="required">*</span></label>
        <input type="text" name="userName" value={this.state.fields.userName} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.userName}</div>
        <label>Email ID: <span className="required">*</span></label>
        <input type="text" name="email" value={this.state.fields.email} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.email}</div>
        <label>Password:<span className="required">*</span></label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <Tips/><div className="errorMsg">{this.state.errors.password}</div>
        <label>Country:</label>
        <input type="text" name="country" value={this.state.fields.country} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.country}</div>
        <label>Address:</label>
        <input type="text" name="address" value={this.state.fields.address} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.address}</div>
        <label>Mobile No:</label>
        <input type="text" name="mobile" value={this.state.fields.mobile} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.mobile}</div>
        <label>Secret Question: <span className="required">*</span></label>
        <input type="text" name="secretquestion" value={this.state.fields.secretquestion} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.secretquestion}</div>
        <label>Secret Answer:<span className="required">*</span></label>
        <input type="text" name="secretanswer" value={this.state.fields.secretanswer} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.secretanswer}</div>

        <input type="submit" className="button"  value="Register"/>
        </form>
    </div>
    <Footer />
</div>

      );
  }


}


export default RegisterForm;
