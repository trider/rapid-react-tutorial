// import {  Link } from "react-router-dom";
import userTasks from "../data/tasks";
import tableCols from "../data/cols";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

import NavbarComponent from '../components/Navigation';
import Footer from '../components/Footer';

// import './_pages.css';

const getVals = () => {
  let vals = []
  for (let i = 0; i < userTasks.length; i++) {

    const item = userTasks[i];
    vals.push(<li key={item.id}>{item.name}</li>);

    
  }

  return vals;
}




const Tasks = () => { 
  
  
  return (
    <div>
      <NavbarComponent />

      

      <Container style={{ padding: "2%" }}>
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

          {task[col.toLowerCase()]}

          </td>

        ))}
        </tr>
        ))}
    
          
        </tbody>    
        

        

      </Table>
      </Container>
      <Footer />
    </div>
  );
}

export default Tasks;