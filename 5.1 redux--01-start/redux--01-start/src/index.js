import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore } from 'redux'
import reducer from './store/reducer'
import {Provider} from 'react-redux' // used to connect react with redux

// best place to create store is index or root file
const store= createStore(reducer)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
