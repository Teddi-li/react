
import { useNavigate } from "react-router-dom";
import "../assets/login.css";
import { loginHook } from "../hooks/loginHook";


export default function Login() {
 const navigate = useNavigate();

  const {
    setEmail,
    setPassword,
    handleSubmit,
  } = loginHook();
return (
      <div className="logintable">
        <h1>Login</h1>
        <div className="login-form">
          
            <div className="input-wrapper">
              <label className="Emaillabel">Email</label>
              <input className="Emailbox" type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-wrapper">
              <label className="passwordlabel">Password</label>
              <input className="passwordbox" type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <br />
            <button type="submit" id="btn" onClick={handleSubmit}>Submit</button>
            <div className="register">
              <a onClick={()=> navigate("/Register")} className="register1">Register</a>
              <a className="register2" href="#">Forgot Password?</a>
            </div>
      </div>
      </div>
  );
  // 
}