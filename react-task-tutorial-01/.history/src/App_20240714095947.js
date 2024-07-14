
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Tasks from './pages/Tasks';

function App() {
  return (
    <div>
      <Router baseline="/">
        <Routes>
          {/* <Route index element={<Login />} /> */}
            <Route path="login" element={<Login />} />
            <Route path="tasks" element={<Tasks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
