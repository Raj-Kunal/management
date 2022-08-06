import React, {useRef, useState} from 'react'
import "./login.css"
import { TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import axios from "../../lib/axios"


const Login = () => {

  const email = useRef();
  const password = useRef();
  let navigate = useNavigate()

  const [student, setStudent] = useState(true);
  const text = student ? 'Login as Teacher' : 'Login as Student';
  const title = student ? 'Student' : 'Teacher';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: email.current.value,
      password: password.current.value,
    };

    try {
      const data = await axios.post("/student/login", user)
      console.log(data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }


  const handleClick = () => {
      setStudent((prev) => !prev);
  }


  return (
    <div className="container-register">
    <div className="box">
      <i className="lockIcon fa-solid fa-user-lock"></i>
      <h1 className="student-register">{title}</h1>
      <form action="" method="post" className="form">
    
        <TextField
        type="email"
          fullWidth
          label="Email"
          required
          variant="outlined"
          size="small"
          margin="dense"
          inputRef={email}
        />
        <TextField
          label="Password"
          required
          variant="outlined"
          size="small"
          margin="dense"
        inputRef={password}
        />
      <button type='submit' className="myButton" onClick={handleSubmit}>LOGIN</button>
      </form>
      <div className="login">
        <div>Already have an account?</div>
        <div>
          <a href="/register">Register</a>
        </div>
      </div>
      <div className="container">
      <button className="Button" onClick={handleClick}> {text} </button>
      </div>
    </div>
  </div>
  )
}

export default Login
