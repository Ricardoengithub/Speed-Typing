import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      line: "Hola mundo",
      s: undefined,
      l: "a"
    }
    this.handlechange = this.handlechange.bind(this);
  }

  handlechange(e){
    if(e.target.value.length == this.state.line.length){
      this.setState({
        l: "Lo has conseguido"
      })
      let counter = 0
      for (let index = 0; index < this.state.line.length; index++) {
        if(e.target.value[index] == this.state.line[index])
          counter++;
      }
      console.log(counter)
    }
  }

  render(){
    return(
      <div>
        <h1>{this.state.line}</h1>
        <input type="text" onChange = {e => this.handlechange(e)}/>
        <h1>{this.state.l}</h1>
      </div>
    )
  }

}

export default App;
