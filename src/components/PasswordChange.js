import React, { Component } from "react";
import { Form, InputGroup, Container, Button } from "react-bootstrap";
import { auth } from "../firebase";

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: ""
};

class PasswordChangeForm extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = event => {
    const { passwordOne } = this.state;

    auth
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
        alert(error.message);
      });

    event.preventDefault();
  };

  render() {
    const { passwordOne, passwordTwo } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

    let passlevel = "Password must contain at least 6 characters", passlevelstyle={color: "black"};
    if (passwordOne.length < 6) {
      passlevel = "Password must contain at least 6 characters";
      passlevelstyle={color: "red"}
    } else if (passwordOne.length <= 9 && passwordOne.length >= 6) {
      passlevel = "Weak";
      passlevelstyle={color: "red"}
    } else if(passwordOne.length < 12) {
      passlevel = "Good";
      passlevelstyle={color: "blue"}
    } else if(passwordOne.length >= 12) {
      passlevel = "Strong";
      passlevelstyle={color:"green"}
    } else {
      passlevel = "Password must contain at least 6 characters";
      passlevelstyle={color: "black"};
    }

    return (
      <div className="inputclass">
        <br/>
        <h5 id="mytextjambo">Change Password</h5>
        <Container>
          <Form onSubmit={this.onSubmit}>
            <InputGroup>
              <Form.Label className="inputlabel">New Password</Form.Label>
              <Form.Control
                type="password"
                name="password1"
                id="inputtext"
                placeholder="New Password"
                value={passwordOne}
                onChange={e =>
                  this.setState(byPropKey("passwordOne", e.target.value))
                }
              />
            </InputGroup>
            <p style={passlevelstyle}>{passlevel}</p>
            <InputGroup>
              <Form.Label className="inputlabel">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="password2"
                id="inputtext"
                placeholder="Confirm Password"
                value={passwordTwo}
                onChange={e =>
                  this.setState(byPropKey("passwordTwo", e.target.value))
                }
              />
            </InputGroup>
            <div className="text-center">
              <br/>
              <Button disabled={isInvalid} type="submit" id="mybutton">
                Change Password
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    );
  }
}

export default PasswordChangeForm;