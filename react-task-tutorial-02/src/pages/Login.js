import {  Navigate } from "react-router-dom";
import Users from '../data/users';
import { useState } from 'react';
import './_pages.css';


const Login = () => {



  const [email, setEmail] = useState("jonnygold@gmail.com");
  const [password, setPassword] = useState("1234");
  const [user, setUser] = useState();
  

  return (
    <div className="card">
      <h1>Login: Part 2</h1>
      {user && (
        <Navigate to="/tasks" replace={true} />
      )}
      <form onSubmit={(e) => {
        e.preventDefault();
       
        const currUser = Users.filter((user) => user.email === email && user.password === password)[0];
        if(currUser){
          alert(`Email: ${email}\nPassword: ${password}`);
          setUser(currUser);
        }
        else{
          alert("Invalid email or password");
        }
      
       



      }} >
        
        <label>Email</label>

        <input 
          type="email" 
          name="username"  
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
          <br/>

        <label>Password</label>
      
          <input 
          type="password" 
          name="password"  
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
           />
   
        <br/>
 
      <button type="submit">Login</button>


      </form>

    </div>

  );
}

export default Login;