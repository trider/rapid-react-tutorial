
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login';
import Tasks from './pages/Tasks';

function App() {
  return (
    <div>
      <Router baseline="/">
        <Route index element={<Login />} />
        <Route exact path="/" component={Login} />
        <Route path="/tasks" component={Tasks} />
        
      </Router>

      
     
    </div>
  );
}

export default App;
