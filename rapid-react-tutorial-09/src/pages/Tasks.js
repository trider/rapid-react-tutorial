
import { TasksProvider } from '../components/Tasks/TasksContext';
import { useLocation } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import NavbarComponent from '../components/Navigation';
import Footer from '../components/Footer';
import Info from "../components/Info";
import TaskTable from '../components/Tasks/TaskTable';

const Tasks = () => {

  const location = useLocation();
  const user = location.state ? location.state: JSON.parse(localStorage.getItem('user'))
  
  return (
    <div>
      <NavbarComponent />
      <Container style={{ marginTop: "50px" }}>
      { user ?  <Info user={user} infoType='profile' variantInfo="info" /> : 'Loading...'}
      <TasksProvider>
        <TaskTable />
      </TasksProvider>  
      </Container>
      <Container style={{ paddingTop: '20%' }} >
        <Footer />
      </Container>
    </div>
  );
}

export default Tasks;
