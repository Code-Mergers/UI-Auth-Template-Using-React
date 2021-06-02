import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, InputGroup, Container } from "react-bootstrap";
import Footer from './Footer';
import Navigation from './Navigation';
import { auth } from "../firebase";
import * as routes from "../constants/routes";
import MainBanner from "./Banner";

//it resets your password. It doesn’t matter if you are authenticated or not
const PasswordForgetPage = () => (
  <div className="div-flex">
    <Navigation />
    <center style={{marginTop: "110px"}}>
      <MainBanner />
      <PasswordForgetForm />
      <br/>
    </center>
    <Footer />
  </div>
);

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

//################### PasswordForget Form ###################
const INITIAL_STATE = {
  email: ""
};


class PasswordForgetForm extends Component {
  state = { ...INITIAL_STATE };
  
  onSubmit = event => {
    const { email } = this.state;
    auth
      .doPasswordReset(email)
      .then(() => {
        alert("We have sent you reset password link to your registered email address.");
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        alert(error.message);
      });

    event.preventDefault();
  };

  render() {
    const { email } = this.state;

    const isInvalid = email === "";

    return ( <div className="inputclass">
        <Container style={{marginBottom: "150px"}}>
          <h2 id="mytexth2">Reset Password</h2>
          <Form onSubmit={this.onSubmit}>
            <InputGroup>
              <InputGroup.Prepend className="inputlabel">Email</InputGroup.Prepend>
              <Form.Control
                type="email"
                name="email"
                id="inputtext"
                placeholder="Enter your registered email"
                value={email}
                required
                onChange={event =>
                  this.setState(byPropKey("email", event.target.value))
                }
              />
            </InputGroup>
            <br/>
            <div className="text-center">
              <Button disabled={isInvalid} type="submit" id="mybutton">
                Reset Password
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    );
  }
}

//################### PasswordForget Link ###################
const PasswordForgetLink = () => (
  <p>
    <Link to={routes.PASSWORD_FORGET} id="mylink">Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

export { PasswordForgetForm, PasswordForgetLink };

