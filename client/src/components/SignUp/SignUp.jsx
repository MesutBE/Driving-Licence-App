import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Redirect } from "react-router";
import useInput from "./useInput";
import FormFields from "./FormFields";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // If post request returns with user data "signedUp" variable turns "true"
  const [signedUp, setSignedUp] = useState(false);

  // call useState multiple times to assign the values in same way
  const firstName = useInput(""); // varchar
  const lastName = useInput(""); // varchar
  const userName = useInput(""); // varchar
  const email = useInput(""); // varchar
  const password = useInput(""); // varchar
  const country = useInput(""); // varchar
  const address = useInput(""); // varchar
  const mobile = useInput(""); // varchar
  const secretquestion = useInput(""); // varchar
  const secretanswer = useInput(""); // varchar

  // Send all the input to backend via axios post request
  const submitForm = async () => {
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
          firstName: firstName.value,
          lastName: lastName.value,
          userName: userName.value,
          email: email.value,
          password: password.value,
          country: country.value,
          address: address.value,
          mobile: mobile.value,
          secretquestion: secretquestion.value,
          secretanswer: secretanswer.value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      if (res.status === 200 && res.length !== 0) {
        localStorage.setItem("token", data);
        localStorage.setItem("username", userName.value);
        setSignedUp(true);
      } else {
        setSignedUp(false);
      }

      return data;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {signedUp ? (
        <Redirect to="/" />
      ) : (
        <div>
            <Button variant="secondary ml-2" onClick={handleShow}>
            Sign-Up
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitForm();
                }}
                action="/newAccount"
                method="post"
                className="was-validated"
              >
                <FormFields
                  firstName={firstName}
                    lastName={lastName}
                    userName={userName}
                  email={email}
                  password={password}
                    country={country}
                    address={address}
                    mobile={mobile}
                    secretquestion={secretquestion}
                    secretanswer={secretanswer}
                />
                <div className="container my-3">
                  <button type="submit" className="btn btn-secondary btn-block">
                    Sign Up
                  </button>
                </div>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </div>
  );
};
export default SignUp;
