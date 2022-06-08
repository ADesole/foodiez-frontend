import React from "react";
import { Button } from "react-bootstrap";
import authstore from "../../stores/AuthStore";

function SignoutButton() {
  return <Button onClick={authstore.signout}>Signout</Button>;
}

export default SignoutButton;
