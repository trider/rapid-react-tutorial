
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer';

const FormBody = () => {

  const [email, setEmail] = useState("jonnygold@gmail.com");
  const [password, setPassword] = useState("1234");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  
  const loginUser = async (email, password) => {
    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            email: email, 
            password: password 
          }),
      });
      const data = await response.json();
      setUser(data)
      if(user)localStorage.setItem('user', JSON.stringify(user))

    } catch (error) {
      console.error('Error adding task:', error);
    }
  }


  return (
    <div>
    { user ?  navigate('/tasks', { state: { ...user } }) :
      <Form onSubmit={(e) => {
         e.preventDefault();
        loginUser(email, password);
        }}>
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
}
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
        <FormBody />
      </Card.Body>
     <Card.Footer>
      <Footer />
     </Card.Footer>
    </Card>

  </Container>





  );
}

export default Login;