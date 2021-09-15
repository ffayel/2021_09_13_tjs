import React, { Component } from 'react'
import "./App.css";
import TChat from './pages/TChat/TChat';
import * as REST_CONFIG from './config/config'; // import all ressource et les met dans un conteneur

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], messages: [] }
  }
  componentDidMount() {
    setInterval(() => {
      fetch(REST_CONFIG.ADR_REST + REST_CONFIG.RESSOURCES.users, { method: 'GET' })
        .then(flux => flux.json())
        .then(arr => {
          this.setState({ users: arr });
          return arr;
        })
    }, 5000
    );
  }
  render() {
    return (
      <>{/* element warper, balise invisible par la suite */}
        <div>
          {JSON.stringify(this.state)}
        </div>
        <div className="App">
          <TChat users={this.state.users} />
        </div>
      </>
    )
  }
}
export default App;