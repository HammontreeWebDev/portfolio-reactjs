import React from 'react';
import ReactDOM from 'react-dom';
import { Init, WelcomeTransition, App } from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

ReactDOM.render(<Init />, document.getElementById('root'));

setTimeout(() => {
    ReactDOM.render(<WelcomeTransition />, document.getElementById('root'));
}, 2300)

setTimeout(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
}, 4300)