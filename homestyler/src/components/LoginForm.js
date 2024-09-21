import React, { useState } from "react";
import "../css/LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { message, Spin } from "antd";

function LoginForm({ checkLogin }) {
  const handleSubmit = (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      checkLogin(username, password);
  };

  return (
      <div>
          <h1 style={{ textAlign: 'center', color: 'Black' }}>Log in to your account</h1>
          <form onSubmit={handleSubmit}>
              <table className="login">
                  <tbody>
                      <tr>
                          <td colSpan={2}>
                              <input id="username" placeholder="Email address" />
                          </td>
                      </tr>
                      <tr>
                          <td colSpan={2}>
                              <input id="password" type="password" placeholder="Password" />
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <Link to="/editpassword">Forgot your password?</Link>
                          </td>
                      </tr>
                      <tr>
                          <td colSpan={2} className="btn-login">
                              <input type="submit" value="Log in" />
                          </td>
                      </tr>
                      <tr>
                          <td colSpan={2}>
                              <span style={{ fontSize: '14px' }}>Don't have an account? </span>
                              <Link to="/signup">Sign up</Link>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </form>
      </div>
  );
}

export default LoginForm;