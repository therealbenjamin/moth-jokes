import React, { useEffect } from "react";
import * as fcl from "@onflow/fcl";

const Auth = ({ user, setUser }) => {
  useEffect(() => {
    fcl.currentUser().subscribe(setUser);
  }, [setUser]);

  if (user?.loggedIn) {
    return (
      <div className="user-wrapper">
        <span>Welcome, {user?.addr ?? "Address Unavailable"}</span>
        <button
          className="btn-primary btn-sign-out"
          onClick={fcl.unauthenticate}
        >
          Sign Out
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button className="btn-primary" onClick={fcl.logIn}>
          Sign In
        </button>
        <button className="btn-secondary" onClick={fcl.signUp}>
          Sign Up
        </button>
      </div>
    );
  }
};

export default Auth;
