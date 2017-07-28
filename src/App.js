import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayName from './DisplayName.js';

class App extends Component {
    constructor(){
      super();
      this.state={name:'faraz',newName:''};
this.handleChange=this.handleChange.bind(this);
this.handleSubmit=this.handleSubmit.bind(this);
    }

handleChange(e){
    this.setState({
      newName:e.target.value
    });
}

handleSubmit(e){
  e.preventDefault();
  this.setState({
    name:this.state.newName,
    newName:''
  });
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <form onSubmit={this.handleSubmit} >
          <input placeholder="enter name here" type="text" value={this.state.newName}
            onChange={this.handleChange} />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <DisplayName name={this.state.name} />
      </div>
    );
  }
}

export default App;
