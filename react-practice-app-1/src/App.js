import React, {Component} from 'react';
import {Fragment} from 'react'
import './App.css';     // css file is global so no need to use from keyword
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component{
  state={
  username: "Areej"
  }

  UsernameHandler=(event)=>{
    this.setState({
      username: event.target.value
      })
  }
  render(){
    return(
      <Fragment>
     <UserOutput username={this.state.username}/>
     <UserOutput username="Faiq"/>
     <UserOutput username="Anjum"/>
     <UserInput changed={this.UsernameHandler} username={this.state.username}></UserInput>
     </Fragment>)
  }
}

export default App;
