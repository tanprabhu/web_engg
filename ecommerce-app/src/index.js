import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//createRoot method creates a new ReactDOM instance that will be used to render the App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //called as an argument, renders app component into the dom replacing any existing content in the root element
 
    <App />
 
);

