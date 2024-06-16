// React Signup Form Component
import React, { useState } from "react";
import axios from "axios";
import Navbar from '../Components/Navbar/Navbar';
import {useNavigate} from 'react-router-dom';
import './CSS/Signup.css';

function SignupForm() {
  // Initialize state variables for form data

  const [firstname, setFName] = useState("");
  const [lastname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const navigate=useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form data
    if (!firstname || !email || !password || !confirmPassword) {
      setMessage("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    // Send form data to backend
    try {
      const response = await axios.post("http://localhost:3001/signup", {
        firstname,
        lastname,
        email,
        phno,
        password,
      });
      // Display success message
      setMessage(response.data);
      if(response.data==="User successfully registered"){
        navigate("/login");
    }
    } catch (error) {
      // Display error message
      setMessage(error.response.data);
    }
  };

  // Render signup form
  return (
    <div>
      <Navbar/>
    <div className="signup">
        <div className="signup-container">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div  className="signup-fields">
    
        <input
          type="text"
          id="fname"
          placeholder="FirstName"
          value={firstname}
          onChange={(e) => setFName(e.target.value)}
        /></div>
        <div  className="signup-fields">
        
        <input
          type="text"
          id="lname"
          value={lastname}
          placeholder="LastName"
          onChange={(e) => setLName(e.target.value)}
        /></div>
                <div  className="signup-fields">
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /></div>
                <div  className="signup-fields">

        <input
          type="text"
          id="pno"
          placeholder="Phone Number"
          value={phno}
          onChange={(e) => setPhno(e.target.value)}
        /></div>
                <div  className="signup-fields">
    
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        /></div>
                <div  className="signup-fields">
    
        <input
          type="password"
          id="confirm-password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        /></div>
        <button type="submit">Signup</button>
      </form>
      <h2>{message}</h2>
    </div>
    </div>
    </div>
  );
}

export default SignupForm;
