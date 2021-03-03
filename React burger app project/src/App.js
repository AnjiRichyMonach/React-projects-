import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import './App.css';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <p>this is app js file</p>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
