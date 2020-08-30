import React from 'react';
import './App.css';
import Header from './Components/Header.js';
import {Switch, Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
    </Switch>
    </>
  );
}

export default App;
