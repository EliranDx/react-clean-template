import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import mainStore from './mainStore';
// Object.assign(mainStore, window.store);

const root = document.getElementById('root');
ReactDOM.hydrate(<App />, root);