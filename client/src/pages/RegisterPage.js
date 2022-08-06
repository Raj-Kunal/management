import React, { useState } from 'react'
import "./registerPage.css"
import Register from '../components/register/Register'

const RegisterPage = () => {

    const [student, setStudent] = useState(true);
    const text = student ? 'Sign Up as Teacher' : 'Sign Up as Student';

    const handleClick = () => {
        setStudent((prev) => !prev);
    }

  return (
    <div>
      <div>
        <Register student = {student} />
      </div>
      <div className='container'>
    <button className="Button" onClick={handleClick}> {text} </button>
      </div>
      </div>
   
  )
}

export default RegisterPage
