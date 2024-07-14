
import './App.css';
import { BrowserRouter as Router, Routes, Rout, Link, NavLink } from 'react-router-dom';
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
      <nav>
        <ul>
          <li>
            <NavLink to="/login" activeClassName="active">Login</NavLink>
          </li>
          <li>
            <NavLink to="/tasks" activeClassName="active">Tasks</NavLink>
          </li>
        </ul>
      </nav>



    </div>
  );
}

export default App;
