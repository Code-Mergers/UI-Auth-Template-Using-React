import React from "react";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";
import { Button } from 'react-bootstrap'; 

const SignOutButton = () => (
  <Link color="info" to={routes.LANDING} onClick={auth.doSignOut}>
    <Button>Sign Out</Button>
  </Link>
);

export default SignOutButton;
