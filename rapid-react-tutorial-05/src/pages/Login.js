import Users from '../data/users';
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
  const [user, setUser] = useState();
  const navigate = useNavigate();
  

  return (
    <div >
      { user ?  navigate('/tasks', { state: { user:user } }) : null}
      <Form onSubmit={(e) => {
        e.preventDefault();
        const currUser = Users.find((user) => user.email === email && user.password === password);
        if(currUser){
          setUser(currUser);
        }
        else{
          alert("Invalid email or password");
        }
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

    </div>

  );
}

const Login = () => {
  return (
    <div>
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
      
    </div>





  );
}

export default Login;