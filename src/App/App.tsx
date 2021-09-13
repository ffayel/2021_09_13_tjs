import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button'

function App() {
  return (
    <div className="App">
      Hello word ! Demat breizh!
      <hr/>
      <Button bgColor="skyblue"
      onClickEvent={(arg)=>{
        console.trace(arg);
      }}>
        <img src="/img/ok.png" alt="ok"/>
      </Button>
      <Button 
      bgColor="tomato" 
      style={{textDecoration:'underline'}}
      onClickEvent={(arg)=>{
        console.log('il y a : '+arg);
      }}>
        <img src="/img/cancel.png" alt="cancel"/>
        Cancel
      </Button>
      <Button/>
    </div>
  );
}

export default App;
