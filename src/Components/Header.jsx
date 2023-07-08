import React from "react";
import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className="header">
      <div>
        <h3>TODO LIST</h3>
        <p>Get Ready To Complete Your Todo List</p>
      </div>
      <div className="user-details">
        <span className="user-name">{isAuthenticated && user.email}</span>
        <div>
          {isAuthenticated ? (
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className="btn"
            >
              Log Out
            </button>
          ) : (
            <button onClick={() => loginWithRedirect()} className="btn">
              Log In
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
