
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Login from './pages/Login';
import Tasks from './pages/Tasks';

function App() {
  return (
    <Router >
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="tasks" element={<Tasks />} />
      </Routes>
    </Router>
  );
}

export default App;
