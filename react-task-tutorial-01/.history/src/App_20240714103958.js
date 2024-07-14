
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Tasks from './pages/Tasks';

function App() {
  return (
    <div className="App">
      <Router baseline="/">
        <Routes>

          {/* <Route index element={<Login />} /> */}
          <Route exact path="/login" component={Login} />
          <Route path="/tasks" component={Tasks} />
        </Routes>

      </Router>



    </div>
  );
}

export default App;
