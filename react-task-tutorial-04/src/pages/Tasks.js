import { useLocation } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';


import Footer from '../components/Footer';
import userTasks from "../data/tasks";
import tableCols from "../data/cols";

import NavbarComponent from '../components/Navigation';
import Info from "../components/Info";





// import './_pages.css';

const Tasks = () => { 
const location = useLocation();
const user = location.state;

 
  return (
    <div>
      <NavbarComponent />

  
      
      <Container style={{ padding: "2%" }}>
        <Info {...user} infoType='profile' variantInfo="info" />
      

      {/* <Profile {...user.user} /> */}
        <h1>Tasks</h1>
 
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
    

      <Info {...user} infoType='status' variantInfo="secondary" />
      
     
      </Container>
      
      
      <Footer />
    </div>
  );
}

export default Tasks;