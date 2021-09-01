import React from 'react';
import HomePage from './Pages/homePage/homepage';
import './App.css'
import { Switch, BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    // <div className="App">
    <Router>
      <Switch>
        <HomePage />
      </Switch>

    </Router>

    // </div>
  );
}

export default App;
