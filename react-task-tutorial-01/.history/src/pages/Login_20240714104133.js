import { Navigate } from "react-router-dom";
import { useState } from 'react';

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