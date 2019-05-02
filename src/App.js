import React, { Component } from 'react';
import Validate from './validationComponent';
import Char from './charComponent';
import './App.css';

class App extends Component {
  state = {
    names: "",
    count: 0,
    textLength: ""
  }


  onChangeHandler = (event) => {
    let name1 = event.target.value;
    let count1 = name1.length;

    this.setState({
      names: name1,
      count: count1
    })   
  }

  deleteCharHandler = (charIndex) => {
    let charBox = [...this.state.names];
    charBox.splice(charIndex, 1);
    this.setState({names: charBox, count: charBox.length});
  }



  render () {
    let chars = null;
    if(this.state.count > 0) {
      let namesTemp = [...this.state.names]
      chars = namesTemp.map((p, index) => {
          return <Char character={p} key={index} clicked={() => this.deleteCharHandler(index)}/>
        })
    }
    return (
      <div className="App">
        {chars}
        <p>{this.state.count}</p>
        <Validate count={this.state.count} />
        <input onChange={(event) => this.onChangeHandler(event)} value={this.state.names} />
      </div>
    );
  }
}

export default App;
