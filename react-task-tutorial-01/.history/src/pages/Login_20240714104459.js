import { Navigate } from "react-router-dom";
import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link to="/tasks">Go to tasks</Link>
    </div>

  );
}

export default Login;