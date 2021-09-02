import React from 'react';
import HomePage from './Pages/homePage/homepage';
import CatDetails from './Pages/productView/ProductDetails/ProductDetails';

import './App.css'
import {Route, Switch, BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    // <div className="App">
    <Router>
      <Switch>
       <Route exact path="/" component={HomePage} />
       <Route exact path="/cat-details" component={CatDetails} />
      </Switch>

    </Router>

    // </div>
  );
}

export default App;
