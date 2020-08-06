import React from "react";

// name, surname, email, password parameters are coming from parent component (Signup)
function FormFields({ firstName, lastName, userName, email, password,country,address,mobile,secretquestion,secretanswer}) {
  return (
    <div>

    <div className="form-group mt-4">
      <h6>First Name:</h6>
      <input
        type="text"
        className="form-control"
        id="fname"
        placeholder="Enter first name"
        name="firstName"
        required
        value={firstName.value}
        onChange={firstName.onChange}
      ></input>
      <div className="valid-feedback"></div>
      <div className="invalid-feedback">* Must be filled.</div>
    </div>
    <div className="form-group mt-4">
      <h6>Last name:</h6>
      <input
        type="text"
       className="form-control"
        id="lname"
        placeholder="Enter last name"
        name="lastName"
        required
        value={lastName.value}
        onChange={lastName.onChange}
      />
      <div className="valid-feedback"></div>
      <div className="invalid-feedback">* Must be filled.</div>
    </div>
    <div className="form-group mt-4">
      <h6>Create User Name:</h6>
      <input
        id="username"
       className="form-control"
        type="text"
        required
        value={userName.value}
        onChange={userName.onChange}
        name="userName"
        placeholder="please create userName"
      />
      <div className="valid-feedback"></div>
      <div className="invalid-feedback mb-4">* Must be filled.</div>
    </div>

    <div className="form-group mt-4">
      <h6>Email Address:</h6>
      <input
        id="email"
        type="email"
       className="form-control"
        aria-describedby="emailHelp"
        placeholder="Enter your e-mail"
        required
        value={email.value}
        onChange={email.onChange}
        name="email"
      />
      <div className="valid-feedback"></div>
      <div className="invalid-feedback">* Must be filled.</div>
    </div>
    <div className="form-group mt-4">
      <h6>Create a password:</h6>
      <input
        id="password"
       className="form-control"
        type="password"
        required
        value={password.value}
        onChange={password.onChange}
        name="password"
        placeholder="Password(at least 7 letters/numbers)"
      />
      <div className="valid-feedback"></div>
      <div className="invalid-feedback mb-4">* Must be filled.</div>
    </div>
    <div className="form-group mt-4">
      <h6>Your Country:</h6>
      <input
        type="text"
       className="form-control"
        id="country"
        placeholder="Enter your country"
        name="country"
        required
        value={country.value}
        onChange={country.onChange}
      ></input>
      <div className="valid-feedback"></div>
      <div className="invalid-feedback">* Must be filled.</div>
    </div>
    <div className="form-group mt-4">
      <h6>Your Address:</h6>
      <input
        type="text"
       className="form-control"
        id="address"
        placeholder="Enter your address"
        name="address"
        required
        value={address.value}
        onChange={address.onChange}
      ></input>
      <div className="valid-feedback"></div>
      <div className="invalid-feedback">* Must be filled.</div>
    </div>
    <div className="form-group mt-4">
      <h6>Mobile Number:</h6>
      <input
        type="text"
        className="form-control"
        id="mobile"
        placeholder="Enter your country"
        name="mobile"
        required
        value={mobile.value}
        onChange={mobile.onChange}
      ></input>
      <div className="valid-feedback"></div>
      <div className="invalid-feedback">* Must be filled.</div>
    </div>
    <div className="form-group mt-4">
      <h6>Secret Question:</h6>
      <input
        type="text"
        className="form-control"
        id="secretquestion"
        placeholder="Enter secret question"
        name="secretquestion"
        required
        value={secretquestion.value}
        onChange={secretquestion.onChange}
      ></input>
      <div className="valid-feedback"></div>
      <div className="invalid-feedback">* Must be filled.</div>
    </div>
    <div className="form-group mt-4">
      <h6>Secret Answer:</h6>
      <input
        type="text"
        className="form-control"
        id="secretanswer"
        placeholder="Enter your country"
        name="secretanswer"
        required
        value={secretanswer.value}
        onChange={secretanswer.onChange}
      ></input>
      <div className="valid-feedback"></div>
      <div className="invalid-feedback">* Must be filled.</div>
    </div>
    </div>
  );
}

export default FormFields;
