import {  Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <p>Part 1: The Basics</p>
      <Link to="/tasks">Go to tasks</Link>
    </div>

  );
}

export default Login;