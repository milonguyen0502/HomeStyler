import React, { useState } from "react";
import "../css/LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { message, Spin } from "antd";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      email === "" ||
      password === "" ||
      userName === "" ||
      confirmPassword === ""
    ) {
      setTimeout(() => {
        setLoading(false);

        messageApi.open({
          type: "error",
          content: "Please fill in all fields ",
        });
      }, 2000);
    } else {
      if (password !== confirmPassword) {
        setTimeout(() => {
          setLoading(false);
          messageApi.open({
            type: "error",
            content: "Passwords do not match ",
          });
        }, 2000);
      } else {
        const account = JSON.parse(localStorage.getItem("accounts"));
        const user = account.find(
          (item) => item.email === email && item.password === password
        );
        if (user) {
          setTimeout(() => {
            setLoading(false);

            messageApi.open({
              type: "error",
              content: "Account already exists ",
            });
          }, 2000);
        } else {
          const newUser = {
            id: account.length + 1,
            name: userName,
            email: email,
            password: password,
          };
          const newAccount = [...account, newUser];
          localStorage.setItem("accounts", JSON.stringify(newAccount));
          setTimeout(() => {
            setLoading(false);
            messageApi.open({
              type: "success",
              content: "Register success",
            });
            navigate("/loginform");
          }, 2000);
        }
      }
    }
  };
  return (
    <>
      {contextHolder}
      <Spin spinning={loading} fullscreen></Spin>
      <br />

      <div className="wrapper">
        <form onSubmit={handleRegister}>
          <h1>Register</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <FaUser
              style={{ width: "30px", height: "30px" }}
              className="icon"
            />
          </div>
          <div className="input-box">
            <input
              type="email"
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
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock
              style={{ width: "30px", height: "30px" }}
              className="icon"
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <FaLock
              style={{ width: "30px", height: "30px" }}
              className="icon"
            />
          </div>
          <button type="submit">Register</button>

          <div className="register-link">
            <p>
              Have an account? <Link to="/loginform">Login</Link>
            </p>
          </div>
        </form>
      </div>
      <br />
    </>
  );
};
export default Register;
