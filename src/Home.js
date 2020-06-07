import React from 'react';

class Home extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      line: props.data.quotes[0].quote,
      dateI: "",
      dateF:"",
      percentage: 0,
      s: ""
    }
    this.handleclick = this.handleclick.bind(this);
    this.handlechange = this.handlechange.bind(this);
  }

  handleclick(){
    this.setState({
      line: this.props.data.quotes[Math.floor(Math.random() * 100)].quote,
      dateI: "",
      dateF:"",
      percentage: 0,
      s: ""
    })
  }

  handlechange(e){
      this.setState({
        s: e.target.value
      })
      
      if(e.target.value.length == 1){
        this.setState({
          dateI: new Date()
        })
      }
  
      if(e.target.value.length == this.state.line.length){
        this.setState({
          dateF: new Date() - this.state.dateI
        })
      }else{
        this.setState({
          dateF: ""
        })
      }
  
      let counter = 0
      for (let index = 0; index < this.state.line.length; index++) {
        if(e.target.value[index] == this.state.line[index])
          counter++;
      }
      let percentage = counter*100/e.target.value.length
  
      this.setState({
        percentage: percentage.toString()
      })
    
  }

  render(){
    return(
      <div>
        <h1>{this.state.line}</h1>
        <input type="text" value={this.state.s} maxLength={this.state.line.length} onChange = {e => this.handlechange(e)}/><br/>
        <button onClick={this.handleclick}>Get new</button>
        <h1>{this.state.percentage}%</h1>
        <h1>{this.state.dateF == "" ? 0 : this.state.dateF} miliseconds</h1>
    <h1>{this.props.data.quotes[0].quote}</h1>
      </div>
    )
  }

}

export default Home;
