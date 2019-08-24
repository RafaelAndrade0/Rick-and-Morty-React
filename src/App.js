import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Characters from "./components/characters/Characters";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Characters />
    </div>
  );
}

export default App;
