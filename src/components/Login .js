import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggedUser.email &&
      input.password === loggedUser.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/");
    } else {
      alert("Wrong Email and Password");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={input.email}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={input.password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        <div>
          <p>
            Don't have an account?
            <Link to="/registration">
              <h6>Register Here</h6>
            </Link>
          </p>
        </div>
        <div>
          <p>
            Forgot your password?
            <Link to="/forgot-password">
              <h6>Reset Here</h6>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
