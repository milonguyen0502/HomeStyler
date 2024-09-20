import React, { useState } from "react";
import "../css/LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { message, Spin } from "antd";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    const account = JSON.parse(localStorage.getItem("accounts"));
    const user = account.find(
      (item) => item.email === email && item.password === password
    );
    if (user) {
      localStorage.setItem("userLogin", JSON.stringify(user));
      setTimeout(() => {
        setLoading(false);

        messageApi.open({
          type: "success",
          content: "Login success",
        });
        navigate("/");
      }, 2000);
    } else {
      setTimeout(() => {
        setLoading(false);
        messageApi.open({
          type: "error",
          content: "Login error",
        });
      }, 2000);
    }
  };
  return (
    <>
      {contextHolder}
      <Spin spinning={loading} fullscreen></Spin>
      <br />
      <div className="wrapper">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaUser
              style={{ width: "30px", height: "30px" }}
              className="icon"
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <FaLock
              style={{ width: "30px", height: "30px" }}
              className="icon"
            />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
      <br />
    </>
  );
};
export default LoginForm;
