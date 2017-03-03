require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

// import Card from './components/card';
// import List from './components/list';
import Board from './components/board';

document.addEventListener('DOMContentLoaded', () =>
    // ReactDOM.render(<Card />, document.getElementById('app'))
    // ReactDOM.render(<List />, document.getElementById('app'))
    ReactDOM.render(<Board />, document.getElementById('app'))
);