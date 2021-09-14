import React from 'react';

import './App.css';
import Button from './components/Button/Button'

class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = { counter:0, name:'FF' };
  }
  render(){
    return (
      <div className="App">
        Hello word ! Demat breizh!
        <hr />
        Valeur du counter : {this.state.counter}
        <hr />
        <Button bgColor="tomato"
        onClickEvent={(arg)=>{
         this.setState({counter:this.state.counter-1});
         this.logCounter();
        }}>
          Soustraction
        </Button>
        <Button 
        bgColor="skyblue" 
        style={{textDecoration:'underline'}}
        onClickEvent={(arg)=>{
          this.setState({counter:this.state.counter+1});
          this.logCounter();
        }}>
          Addition
        </Button>
      </div>

    );
  }
  logCounter(){
    console.log('value du counter', this.state.counter);
  }
}
export default App;