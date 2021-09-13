import React from 'react';

import './App.css';
import Button from './components/Button/Button'

class App extends React.Component{
  counter=0
  render(){
    return (
      <div className="App">
        Hello word ! Demat breizh!
        <hr />
        Valeur du counter : {this.counter}
        <hr />
        <Button bgColor="tomato"
        onClickEvent={(arg)=>{
         this.counter--;
         this.logCounter();
        }}>
          Soustraction
        </Button>
        <Button 
        bgColor="skyblue" 
        style={{textDecoration:'underline'}}
        onClickEvent={(arg)=>{
          this.counter++;
          this.logCounter();
        }}>
          Addition
        </Button>
      </div>

    );
  }
  logCounter(){
    console.log('value du counter', this.counter);
  }
}
export default App;