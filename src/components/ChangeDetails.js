import React, { Component } from "react";
import { auth, db } from "../firebase/firebase";
import { Button, Form, InputGroup, Container } from "react-bootstrap";


const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class ChangeDetailsForm extends Component {
  state = {
    details: ""
  };


  onSubmit = event => {
    db.ref('users/'+ auth.currentUser.uid).update({})
    .then(()=>{
      alert("Your details are successfully updated.\nRefresh the page to see changes.");
    })
    .catch(err => {
      alert(err.message);
    });

    event.preventDefault();
  };

  render() {
    const {
      details
    } = this.state;

    //a boolen to perform validation
    const isInvalid = details === "";

    return (
      <div className="inputclass">
        <Container>
        <h5 id="mytextjambo">Change Your Details</h5>
          <Form onSubmit={this.onSubmit}>
            <InputGroup>
              <InputGroup.Prepend className="inputlabel">Change Details</InputGroup.Prepend>
              <Form.Control
                type="text"
                name="name"
                id="inputtext"
                placeholder=" Change details"
                value={details}
                onChange={e => this.setState(byPropKey("details", e.target.value))}
              />
            </InputGroup>
            <br/>
            <div className="text-center">
              <Button disabled={isInvalid} type="submit" id="mybutton">
                Save Changes
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    );
  }
}

export default ChangeDetailsForm;

