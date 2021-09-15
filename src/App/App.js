import React, { Component } from 'react'
import "./App.css";
import Connexion from './pages/Connexion/Connexion';
import TChat from './pages/TChat/TChat';
import Store from "./store/store";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              Hello et bienvenue a tous sur ce chat React
              <Link to="Auth">Connectez vous maintenant</Link>
            </Route>
            <Route path="/Auth">
              <Connexion />
            </Route>
            <Route path="/Tchat/:id">
              <TChat/>
            </Route>
            <Route path="/">
              Error 404
            </Route>
          </Switch>
          
          
        </div>
      </Router>
    )
  }
}
export default App;