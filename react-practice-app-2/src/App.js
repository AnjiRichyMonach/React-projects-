import React, { Component } from 'react'
import Validation from './Validation/Validation'
import Char from './Char/Char'
import './App.css';

class App extends Component {

  state = {
    inputtedValue: '',
    textLength: 0,
    text: '',
  }


  changeInputHandler = (event) => {
    this.setState({
      inputtedValue: event.target.value,
      textLength: event.target.value.length
    })
    // console.log("inputted value", this.state.inputtedValue)
    console.log(this.state.textLength)

    if (event.target.value.length >= 5) {
      this.setState({ text: 'This text is too long' })
    } else {
      this.setState({ text: 'This text is too short' })
    }
  }


  deleteHandler = (Index) => {
    const newarray = this.state.inputtedValue.split('');    //split will convert string into array
    console.log("Array of char", newarray)
    newarray.splice(Index, 1);
    let singleArray = newarray.join('')  // to joins elements
    this.setState({
      inputtedValue: singleArray,
      textLength: singleArray.length
    })

    console.log(this.state.textLength)

    if (this.state.textLength >= 6) {
      this.setState({ text: 'This text is too long' })
    } else {
      this.setState({ text: 'This text is too short' })
    }
    console.log(this.state.textLength)
  }

  render() {

    let conditionalText = null;
    if (true) {
      conditionalText = (
        <div>
          <Validation textLength={this.state.textLength}
            displayText={this.state.text}
          />
        </div>)
    }

    const charList =
      this.state.inputtedValue.split('').map((ch, index) => {   //split works on string and return an array
        return (<Char character={ch}
          key={index}
          clicked={() => { this.deleteHandler(index) }} />)
      })


    return (
      //to make one parent root element
      <>
        <div className="App">
          <h1>This is the second assignment of react course 1</h1>
          <input type="text"
            onChange={(event) => { this.changeInputHandler(event) }}
            value={this.state.inputtedValue}

          />
          <p>Length of inputted value: {this.state.inputtedValue.length}</p>
          {conditionalText}
          {charList}
        </div>



      </>
    );
  }
}

export default App;
