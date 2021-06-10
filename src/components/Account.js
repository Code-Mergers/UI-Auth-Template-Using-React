import React, { Component } from "react";
import AuthUserContext from "./AuthUserContext";
import withAuthorization from "./withAuthorization"; //redirects to sign in if user not signed in
import { db, auth } from '../firebase/firebase';
import Navigation from "./Navigation";
import Footer from './Footer';
import PasswordChangeForm from './PasswordChange';
import { Container, Table } from "react-bootstrap";
import ChangeDetailsForm from './ChangeDetails'
import MainBanner from "./Banner";

const INITIAL_STATE = {
  name: "",
  email: "",
  error: null
};

class AccountPage extends Component {

  state = {...INITIAL_STATE};

  componentWillMount() {
      db.ref('users/' + auth.currentUser.uid).once('value').then((snapshot) => {
        if (snapshot) {
          this.setState(snapshot.val());
        }
      }).catch( e => {
        alert(e.message);
      })
  }

  render() {
    return <div>
      <Navigation />
      <AuthUserContext.Consumer >
        {authUser => (
          <Container style={{marginTop: "110px"}}>
          <center>
            <MainBanner />
            <div className="div-flex">
              <div>
                <h2>Your Profile</h2>
                <Table striped bordered hover id="mytable">
                  <tr>
                      <th colspan="1">Name:</th>
                      <td colspan="3">{this.state.name}</td>
                  </tr>
                  <tr>
                      <th colspan="1">Email:</th>
                      <td colspan="3">{this.state.email}</td>
                  </tr>
                </Table>
              </div>
            </div>
            <br/>
            <ChangeDetailsForm />
            <br/>
            <PasswordChangeForm />
          </center>
          </Container>
        )}
      </AuthUserContext.Consumer>
      <hr/>
      <br/>
      <Footer />
    </div>
  }
};

const authCondition = authUser =>
  !!authUser && authUser.providerData[0].providerId !== "facebook.com"; //true and false

export default withAuthorization(authCondition)(AccountPage);
