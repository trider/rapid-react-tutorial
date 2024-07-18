import { Navigate } from "react-router-dom";
import { useState } from 'react';


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import Footer from '../components/Footer';


import Users from '../data/users';
// import './_pages.css';








const LoginForm = () => {


  const [email, setEmail] = useState("jonnygold@gmail.com");
  const [password, setPassword] = useState("1234");
  const [user, setUser] = useState(null);
 


  const loginUser = (email, password) => {


    const currUser = Users.filter((user) => user.email === email && user.password === password)[0];
        if(currUser){
          alert(`Email: ${email}\nPassword: ${password}`);
          setUser(currUser);
        }
        else{
          alert("Invalid email or password");
        }
  }


  return (
    <div >

      {user && (
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
      {user && (
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