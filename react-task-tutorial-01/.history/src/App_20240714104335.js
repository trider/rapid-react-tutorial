
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Tasks from './pages/Tasks';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router baseline="/">
        <Routes>

          <Route index element={<Login />} />
          <Route exact path="/login" component={Login} />
          <Route path="/tasks" component={Tasks} />
        </Routes>
      </Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Tasks">Tasks</Link>
          </li>
        </ul>
      </nav>



    </div>
  );
}

export default App;
