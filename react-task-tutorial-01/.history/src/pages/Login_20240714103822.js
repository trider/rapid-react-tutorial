import { Navigate } from "react-router-dom";
import { useState } from 'react';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <button   onClick={(e) => { 
        <Navigate to="/tasks" replace={true} />

      }}>Login</button>
    </div>

  );
}

export default Login;