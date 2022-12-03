import React from 'react';
import ReactDOM from 'react-dom';
import { Init, DeleteName, LandingPage } from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Init />, document.getElementById('root'));

setTimeout(() => {
    ReactDOM.render(<DeleteName />, document.getElementById('root'));
}, 2300)

setTimeout(() => {
    ReactDOM.render(<LandingPage />, document.getElementById('root'));
}, 4300)