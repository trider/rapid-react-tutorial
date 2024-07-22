import { useLocation } from "react-router-dom";
import userTasks from "../data/tasks";
import tableCols from "../data/cols";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import NavbarComponent from '../components/Navigation';
import Footer from '../components/Footer';
import Alert from 'react-bootstrap/Alert';




// import './_pages.css';

const Tasks = () => { 
const location = useLocation();
const user = location.state;
 
  return (
    <div>
      <NavbarComponent />
      
      <Container style={{ padding: "2%" }}>
        <h1>Tasks</h1>
        <Alert variant="info">
          Welcome: {user.name}
          <span style={{ float: "right" }}>
          <button className="btn btn-sm btn-primary" onClick={(e)=>{
            alert(JSON.stringify(user));
          }} >View Profile</button>
            
          </span>
          

        </Alert>
        <Table striped bordered hover size="lg">
        <thead>
          <tr>
            {tableCols.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
        {userTasks.map((task) => (
        <tr key={task.id}>
        {tableCols.map((col) => (
          <td key={col}>

          {task[col.toLowerCase() ]}

          </td>

        ))}
        </tr>
        ))}
    
          
        </tbody>    
        

        

      </Table>
      
      <Alert variant="secondary">
        Status: { user.isLoggedIn ? 'Authenticated' : 'Not Authenticated' }
        
          

       </Alert>
      </Container>
      
      
      <Footer />
    </div>
  );
}

export default Tasks;