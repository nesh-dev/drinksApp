import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Views/Home'; 
import DrinkDetail from './Views/DrinkDetail'
import './App.css'


function App() {
  return (
    <div>
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="drink/:id" exact component={DrinkDetail} />
        </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
