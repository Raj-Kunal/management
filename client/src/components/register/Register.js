import React, { useRef } from "react";
import "./register.css";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "../../lib/axios";

const Register = ({ student }) => {

  // console.log(student);
  const name = useRef();
  const father = useRef();
  const mother = useRef();
  const grade = useRef();
  const bloodGroup = useRef();
  const address = useRef();
  const phone = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  let navigate = useNavigate();

  const handleStudentSubmit = async (e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
      confirmPassword.current.setCustomValidity("Password don't match!");
    } else {
      const user = {
        name: name.current.value,
        father: father.current.value,
        mother: mother.current.value,
        grade: grade.current.value,
        bloodGroup: bloodGroup.current.value,
        address: address.current.value,
        phone: phone.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      // console.log(user);
      // try {
      //   const user =  await axios.get(`/student/${user._id}`)
      //  console.log(user);
      //  } catch (err) {
      //    console.log(err);
      //  }
      try {
        await axios.post("/student/register", user)
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleTeacherSubmit = async (e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
      confirmPassword.current.setCustomValidity("Password don't match!");
    } else {
      const user = {
        name: name.current.value,
        email: email.current.value,
        phone: phone.current.value,
        password: password.current.value,
      };

      try {
        await axios.post("/teacher/register", user)
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
  }
};

  const StudentRegister = () => {
    return (
      <div className="container-register">
        <div className="box">
          <i className="lockIcon fa-solid fa-user-lock"></i>
          <h3 className="student-register">STUDENT</h3>
          <form className="form" onSubmit={handleStudentSubmit}>
            <TextField
              // id="outlined-basic"
              label="First Name"
              type="text"
              required
              variant="outlined"
              size="small"
              margin="dense"
              inputRef={name}
            />

            <TextField
              // id="outlined-basic"
              label="Father Name"
              type="text"
              required
              variant="outlined"
              size="small"
              margin="dense"
              inputRef={father}
            />

            <TextField
              // id="outlined-basic"
              label="Mother Name"
              type="text"
              variant="outlined"
              required
              size="small"
              margin="dense"
              inputRef={mother}
            />

            <div className="flex">
              <span className="flex-given">
                {" "}
                <TextField
                  // id="outlined-basic"
                  label="Class"
                  required
                  variant="outlined"
                  size="small"
                  margin="dense"
                  inputRef={grade}
                />
              </span>

              <TextField
                // id="outlined-basic"
                label="Blood Group"
                required
                variant="outlined"
                size="small"
                margin="dense"
                inputRef={bloodGroup}
              />
            </div>
            <TextField
              // id="outlined-basic"
              fullWidth
              label="Email"
              type="email"
              required
              variant="outlined"
              size="small"
              margin="dense"
              inputRef={email}
            />
            <TextField
              // id="outlined-basic"
              fullWidth
              label="Phone Number"
              type="tel"
              required
              variant="outlined"
              size="small"
              margin="dense"
              inputRef={phone}
            />
            <TextField
              // id="outlined-basic"
              fullWidth
              type="text"
              label="Address"
              required
              variant="outlined"
              size="small"
              margin="dense"
              inputRef={address}
            />
            <TextField
              // id="outlined-basic"
              label="Password"
              type="password"
              required
              variant="outlined"
              size="small"
              margin="dense"
              inputRef={password}
            />
            <TextField
              // id="outlined-basic"
              label="Confirm Password"
              type="password"
              required
              variant="outlined"
              size="small"
              margin="dense"
              inputRef={confirmPassword}
            />
             <div>
            <button type="submit" className="myButton">
              REGISTER
            </button>
            </div>
          </form>

          <div className="login">
            <div>Already have an account?</div>
            <div>
              <a href="/login">Login</a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const TeacherRegister = () => {
    return (
      <div className="container-register">
        <div className="box">
          <i className="lockIcon fa-solid fa-user-lock"></i>
          <h1 className="student-register">TEACHER</h1>
          <form className="form" onSubmit={handleTeacherSubmit}>
            <TextField
              id="outlined-basic"
              fullWidth
              label="Name"
              type="text"
              required
              variant="outlined"
              size="small"
              margin="dense"
              inputRef={name}
            />
            <TextField
              id="outlined-basic"
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
              id="outlined-basic"
              fullWidth
              label="Phone Number"
              type="tel"
              required
              variant="outlined"
              size="small"
              margin="dense"
              inputRef={phone}
            />

            <TextField
              id="outlined-basic"
              label="Password"
              type="password"
              required
              variant="outlined"
              size="small"
              margin="dense"
              inputRef={password}
            />
            <TextField
              id="outlined-basic"
              label="Confirm Password"
              type="password"
              required
              variant="outlined"
              size="small"
              margin="dense"
              inputRef={confirmPassword}
            />
            <div>
            <button type="submit" className="myButton">
              REGISTER
            </button>
            </div>
          </form>

          <div className="login">
            <div>Already have an account?</div>
            <div>
              <a href="/login">Login</a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <div>{student ? <StudentRegister /> : <TeacherRegister />}</div>;
};

export default Register;
