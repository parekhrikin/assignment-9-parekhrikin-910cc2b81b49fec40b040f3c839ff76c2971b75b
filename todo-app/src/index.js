import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// In React, a “root” is a pointer to the top-level data structure that React uses to track a tree to render. In the legacy API, the root was opaque to the user because we attached it to the DOM element, and accessed it through the DOM node, never exposing it to the user
ReactDOM.render(

  <App />
  ,
  document.getElementById('root')
);

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// root.render(

//   <App />

// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
