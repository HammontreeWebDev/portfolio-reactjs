import React from 'react';
import ReactDOM from 'react-dom';
import { Init } from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Init />, document.getElementById('root'));

setTimeout(() => {
    console.log('This message shows after 3 seconds on page load');
}, 3000)