import React from "react";
import authstore from "../../stores/AuthStore";

function SignoutButton() {
  return (
    <button className="userButtons" onClick={authstore.signout}>
      Signout
    </button>
  );
}

export default SignoutButton;
