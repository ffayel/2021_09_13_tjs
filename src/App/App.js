import React, { Component } from 'react'
import "./App.css";
import TChat from './pages/TChat/TChat';
import Store from "./store/store";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TChat />
      </div>
    )
  }
}
export default App;