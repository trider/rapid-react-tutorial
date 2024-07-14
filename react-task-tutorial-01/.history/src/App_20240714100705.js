
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Tasks from './pages/Tasks';

function App() {
  return (
    <div className="App">
      <Router >
        <Routes>

          <Route index element={<Login />} />
          <Route exact path="/" component={Login} />
          <Route path="/tasks" component={Tasks} />
        </Routes>

      </Router>



    </div>
  );
}

export default App;
