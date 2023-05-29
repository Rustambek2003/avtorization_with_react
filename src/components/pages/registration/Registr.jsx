import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import "./registr.css";

const Registr = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userlogin,setLogin]=useState('')
  const [userpassword,setPassword]=useState('')
  const [error,setError]=useState(false)
  


  const postData = async () => {
    setLoading(true);
    setError(false);
  
    try {
      const response = await axios.post(
        "/api/v1/user/login/",{

       
            username:userlogin,
            password:userpassword,
      
        }
        
        );
    
      localStorage.setItem("user-token", response.access);
      navigate("/home");
    } catch (error) {
      console.error("Error:", error);
      setError(true)
      
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    setLogin('')
    setPassword('')
    postData()
 
  };

  return (
    <div>
      <div className="loginCard">
        <div className="cardLogin">
          {loading && <h3> Loading ... </h3>}
          {error && <h3 style={{color:"red"}}>Пароль не правильный</h3>}
          
            <input

              name="username"
              type="text"
              placeholder="Login"
              className="input"
              value={userlogin}
              onChange={(e) => setLogin(e.target.value)}
              
            />
            <input
              name="password"
              type="text"
              placeholder="Password"
              className="input"
              value={userpassword}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              <button onClick={handleSubmit}> Send</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Registr;
