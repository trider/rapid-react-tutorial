import { Navigate } from "react-router-dom";
import { useState } from 'react';
import { useReducer } from 'react';


import userList from '../data/users';
import './_pages.css';


const userReducer = (users, action) => {
  switch (action.type) {
    case 'login': {

      const user = users.filter((user) => user.email === action.email && user.password === action.password)[0]||null;
      
      if (user!==null) {
        return {
          ...user,
          isLoggedIn: true,
          showMessage: false
        }
      }
      else {
        return {
          isLoggedIn: false,
          showMessage: true
        }
      }
      
     

    }


    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}






const Login = () => {


  const [email, setEmail] = useState("jonnygold@gmail.com");
  const [password, setPassword] = useState("1234");
  const [user, dispatch] = useReducer(userReducer, userList);


  const loginUser = (email, password) => {


    dispatch({
      type: 'login',
      email: email,
      password: password
    });
  }


  return (
    <div className="card">
      <h1>Login: Part 3</h1>
      {user.isLoggedIn && (
        <Navigate to="/tasks" replace={true} />
      )}
  
      <form onSubmit={(e) => {
        e.preventDefault();
        loginUser(email, password);


      }} >

        <label>Email</label>

        <input
          type="email"
          name="username"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <br />

        <label>Password</label>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        <button type="submit">Login</button>


      </form>
      {user.showMessage && (
        <p>Invalid email or password</p>
      )}

    </div>

  );
}

export default Login;