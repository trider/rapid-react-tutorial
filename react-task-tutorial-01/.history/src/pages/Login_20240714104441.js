import { Navigate } from "react-router-dom";
import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <button   onClick={(e) => { 
       alert('You have been logged in');
        <Navigate to="/tasks" replace={true} />

      }}>Login</button>
    </div>

  );
}

export default Login;