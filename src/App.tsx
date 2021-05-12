import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Containers/Home'; 
import './App.css'


function App() {
  return (
    <div>
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
