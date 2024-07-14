
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login';
import Tasks from './pages/Tasks';

function App() {
  return (
    <div>
      <Router baseline="/">
        <Routes>
          <Route index element={<LoginForm />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="tasks" element={<TaskList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
