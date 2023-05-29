import React, { useState,useEffect } from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";


const Header = () => {
 
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("user-token") ?? false;
    setHasToken(token);
  }, [hasToken]);
  
  return (
    <div>
      <div className="header">
        <div className="block">
        {hasToken?.length > 0 ? (
            <h3
              className="tagText"
              style={{cursor:'pointer'}}
                 
              
            >
              Home
            </h3>
          ) : (
            <h3 className="tagText">
              <Link to="/home">Home</Link>
            </h3>
          )}
          {/* <Link to="/home">
            <h3 className="tagText">Home</h3>
          </Link> */}

          {hasToken?.length > 0 ? (
            <h3
              className="tagText"
              style={{cursor:'pointer'}}
              onClick={() => {
                localStorage.removeItem("user-token");
              }}
            >
              Log Out
            </h3>
          ) : (
            <h3 className="tagText">
              <Link to="/">Login</Link>
            </h3>
           
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
