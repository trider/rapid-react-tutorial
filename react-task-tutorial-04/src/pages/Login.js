import { Navigate } from "react-router-dom";
import { useState } from 'react';
import { useReducer } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import Footer from '../components/Footer';


import  Users from '../data/users';
// import './_pages.css';


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






const LoginForm = () => {


  const [email, setEmail] = useState("jonnygold@gmail.com");
  const [password, setPassword] = useState("1234");
  const [user, dispatch] = useReducer(userReducer, Users);


  const loginUser = (email, password) => {


    dispatch({
      type: 'login',
      email: email,
      password: password
    });
  }


  return (
    <div >

      {user.isLoggedIn && (
        <Navigate to="/tasks" replace={true} />
      )}
  
      <Form onSubmit={(e) => {
        e.preventDefault();
        loginUser(email, password);


      }} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}


          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" >Submit</Button>
        </div>




      </Form>
      {user.showMessage && (
        <p>Invalid email or password</p>
      )}

    </div>

  );
}

const Login = () => {
  return (

    <Container fluid className='container-lg' style={{ marginTop: '100px', width: '40%' }}>
    <Card className='card-sm'>
      <Card.Header className='bg-primary text-light text-center' >
        <h2>Login</h2>
      </Card.Header>
      <Card.Body>
        <LoginForm />

      </Card.Body>
     <Card.Footer>
      <Footer />
     </Card.Footer>
    </Card>

  </Container>





  );
}



export default Login;