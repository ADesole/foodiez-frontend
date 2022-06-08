import React from "react";
import { Button } from "react-bootstrap";
import authstore from "../../stores/AuthStore";

function SignoutButton() {
  return (
    <button className="signoutButton" onClick={authstore.signout}>
      Signout
    </button>
  );
}

export default SignoutButton;
