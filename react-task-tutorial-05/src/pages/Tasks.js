
import React, { useState, useEffect } from 'react';
import tableCols from "../data/cols";

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import NavbarComponent from '../components/Navigation';
import Footer from '../components/Footer';
import Info from "../components/Info";

import { useLocation } from "react-router-dom";


const TaskTable = (tasks) => {
  return (
    <div>
      <Table striped bordered hover size="lg">
        <thead>
          <tr>
            {tableCols.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tasks.taskList.map((task) => (
            <tr key={task.id}>
              {tableCols.map((col) => (
                <td key={col}>{task[col.toLowerCase()]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
     
    </div>
  );
};

const Tasks = () => {

  const [tasks, setData] = useState(null);
  const location = useLocation();
  const user = location.state;

  useEffect(() => {
    fetch(`http://localhost:3000/api/tasks/user/${user.user.userName}`)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  });

  return (
    <div>
      <NavbarComponent />
      <Container style={{ marginTop: "50px" }}>
      { user ?  <Info {...user} infoType='profile' variantInfo="info" /> : 'Loading...'}
      { tasks ? <TaskTable taskList={tasks} />  : 'Loading...'}
      </Container>
      <Container style={{ paddingTop: '20%' }} >
        <Footer />
      </Container>
    </div>
  );
}

export default Tasks;
