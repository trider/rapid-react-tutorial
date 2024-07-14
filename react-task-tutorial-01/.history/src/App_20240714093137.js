
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <h1>Home Page</h1>
          </Route>
          <Route path="/about">
            <h1>About Page</h1>
          </Route>
          <Route path="/contact">
            <h1>Contact Page</h1>
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
