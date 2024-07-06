import React, { useState } from "react";
import { useNavigate ,Link } from "react-router-dom";

const Registration = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };

  return (
    <div className="main-container">
      <h1> CREAT AN ACCOUNT</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="name">
            <label>Name :</label>
            <input
              type="text"
              name="name"
              value={input.name}
              placeholder="Enter your name"
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="email">
            <label>Email :</label>
            <input
              type="text"
              name="email"
              value={input.email}
              placeholder="Enter your name"
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="password">
            <label>Password :</label>
            <input
              type="text"
              name="password"
              value={input.password}
              placeholder="Enter your name"
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div className="submit">
            <button type="submit">Submit</button>
          </div>

          <div>
          <p>
            Have already an account
            <Link to="/login">
              <h6>Login</h6>
            </Link>
          </p>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
