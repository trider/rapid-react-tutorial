
import './App.css';
import { BrowserRouter as NavLink } from 'react-router-dom';
import Login from './pages/Login';
import Tasks from './pages/Tasks';

function App() {
  return (
    <div className="App">
      {/* <Router baseline="/">
        <Routes>

          <Route index element={<Login />} />
          <Route exact path="/loogin" component={Login} />
          <Route path="/tasks" component={Tasks} />
        </Routes>

        
      </Router> */}

        <ul>
          <li>
            <NavLink to="/login" >Login</NavLink>
          </li>
          <li>
            <NavLink to="/tasks">Tasks</NavLink>
          </li>
        </ul>
     



    </div>
  );
}

export default App;
