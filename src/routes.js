import React from "react";
import {Switch, Route} from "react-router-dom"

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Classlist from './components/ClassList/ClassList';




export default ( 
   <Switch>
   <Route component = {Home} exact path="/" />
   <Route component = {About} path="/about" />
   <Route component = {Classlist} path="/classlist/:class" />
   
   </Switch>
);

