import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "./Login.css";
import { useAuth } from "../../context/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  // Email or Phone Verification useState
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Check if the input is a valid email or phone number
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if(emailRegex.test(value)){
      setEmail(value)
     
    }else if(phoneRegex.test(value)){
      setPhone(value)
      
    }
    
  };


  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://sharvannosepin.onrender.com/api/v1/auth/login",
        {
         
          password,

          identifier: email || phone,
         

        }

      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Register - Ecommer App">
      <div className="container-fluid LoginCOntainer">
        <h1 className="text-center text-white">Login </h1>

        <div className="form-cont " style={{ minHeight: "90vh" }}>

          <form onSubmit={handleSubmit}>


            <div className="mb-3  inputBox">
              <input
                type="text" 
                
                autoFocus
                value={inputValue}
                onChange={handleInputChange}
                className="form-control"
                id="emailOrPhone"
                placeholder="Email or Phone "    
                required
              />
            </div>
            <div className="mb-3 inputBox">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary LoginBtn">
              Log In
            </button>

            <div className="mb-3 ForgetButton">
              <button
                type="button"
                className="btn forgot-btn"
                onClick={() => {
                  navigate("/forgot-password");
                }}
              >
                Forgot your Password?
              </button>
            </div>


          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
