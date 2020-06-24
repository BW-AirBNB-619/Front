import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard'
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute"

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Route exact path="/" component={Login} /> */}
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}


export default App;
