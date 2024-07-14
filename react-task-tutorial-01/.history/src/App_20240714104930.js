
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Tasks from './pages/Tasks';

function App() {
  return (
    <div className="App">
     
      <Router baseline="/">
        <Routes>

          <Route index element={<Login />} />
          <Route exact path="/login" component={Login} />
          <Route exact pathpath="/tasks" component={Tasks} />
        </Routes>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      
      
      
      </BrowserRouter>

      </Router> 



    </div>
  );
}

export default App;
