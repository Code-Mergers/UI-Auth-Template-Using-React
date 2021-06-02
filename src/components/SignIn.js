import React, { Component } from "react";
import { Button, Form, InputGroup, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { SignUpLink } from "./SignUp";
import { PasswordForgetLink } from "./PasswordForget";
import { auth } from "../firebase";
import * as routes from "../constants/routes";
import Footer from './Footer';
import Navigation from './Navigation';
import MainBanner from "./Banner";

const SignInPage = ({ history }) => {
  return (
    <div className="div-flex" style={{marginTop: "110px"}}>
      <Navigation />
      <center>
        <MainBanner />
        <SignInForm history={history} />
        <SignUpLink />
        <PasswordForgetLink />
        <br/>
        <hr/>
        <Footer />
      </center>
    </div>
  );
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  password: ""
};

class SignInForm extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = event => {
    const { email, password } = this.state;
    const { history } = this.props;
    
    auth
      .doSignInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({ ...INITIAL_STATE });
          history.push(routes.LANDING);
        })
        .catch(error => {
          alert(error.message);
        });

      event.preventDefault();
  };

  render() {
    const { email, password } = this.state;
    const isInvalid = password === "" || email === "";

    return (
      <div className="inputclass">
        <Container>
          <center>
            <h2 id="mytexth2">Sign In</h2>
            <Form onSubmit={this.onSubmit}>
              <InputGroup>
                <InputGroup.Prepend className="inputlabel">Email</InputGroup.Prepend>
                <Form.Control
                  id="inputtext"
                  type="email"
                  placeholder="user@gmail.com"
                  value={email}
                  required
                  autoFocus
                  onChange={event =>
                    this.setState(byPropKey("email", event.target.value))
                  }
                  />
              </InputGroup>
              <br/>
              <InputGroup>
                <InputGroup.Prepend className="inputlabel">Password</InputGroup.Prepend>
                <Form.Control
                  id="inputtext"
                  type="password"
                  placeholder="Password"
                  value={password}
                  required
                  onChange={event =>
                    this.setState(byPropKey("password", event.target.value))
                  }
                  />
              </InputGroup>
              <br/>
              <div className="text-center">
                <Button disabled={isInvalid} type="submit" id="mybutton">
                  Sign In
                </Button>
              </div>
            </Form>
            <hr/>
        </center>
        </Container>
      </div>
    );
  }
}

export default withRouter(SignInPage);

export { SignInForm };
