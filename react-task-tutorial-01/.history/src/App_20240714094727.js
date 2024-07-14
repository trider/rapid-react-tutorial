
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes baseline="/"/>
          <Route path="/login" component={Login} />
          <Route path="/tasks" component={Tasks} />
        
      </Router>

      
     
    </div>
  );
}

export default App;
