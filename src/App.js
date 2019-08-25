import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import RickMortyState from "./context/rickmorty/RickMortyState";

function App() {
  return (
    <RickMortyState>
      <div>
        <Router>
          <div>
            <Navbar title='Rick and Morty React' />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </RickMortyState>
  );
}

export default App;
