import React from 'react'
import './login.css'
const Login = () => {
  return (
    <div className='login-sginup'>
      <div className="login-sginup-conatiner">
        <div className="label">
          {/* <label for="uname"><b>Username</b></label> */}
          <input type="text" placeholder="Enter Username" name="uname" required />

          {/* <label for="psw"><b>Password</b></label> */}
          <input type="password" placeholder="Enter Password" name="psw" required />

          <button type="submit">Login</button>
            <input type="checkbox" checked="checked" name="remember" /> 
            Remember me
        </div>
      </div>
    </div>
  )
}
export default Login
