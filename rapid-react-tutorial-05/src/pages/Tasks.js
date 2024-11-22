

import userTasks from "../data/tasks";
import tableCols from "../data/cols";

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import NavbarComponent from '../components/Navigation';
import Footer from '../components/Footer';


const TaskTable = () => {
  return (
    <div>
      <h1>Tasks</h1>
      <Table>
        <thead>
          <tr>{tableCols.map((col) => (<th key={col}>{col}</th>))}</tr>
        </thead>
        <tbody>
          {userTasks.map((task) => (
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

  return (
    <div>
      <NavbarComponent />
      <Container style={{ marginTop: "50px" }}>
        <TaskTable />
      </Container>
      <Container style={{ paddingTop: '20%' }} >
        <Footer />
      </Container>
    </div>
  );
}

export default Tasks;
