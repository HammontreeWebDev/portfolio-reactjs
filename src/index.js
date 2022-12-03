import React from 'react';
import ReactDOM from 'react-dom';
import { Init, DeleteName } from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Init />, document.getElementById('root'));

setTimeout(() => {
    console.log('This message shows after 3 seconds on page load');
    ReactDOM.render(<DeleteName />, document.getElementById('root'));
}, 3000)