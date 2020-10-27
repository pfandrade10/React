import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainMenu from './navbar/navbar'
import reportWebVitals from './reportWebVitals';
import SideMenu from './sidebar/sidebar';
import MainContent from './content/content';

ReactDOM.render(
  <React.StrictMode>
    <MainMenu/>
    <SideMenu/>
    <MainContent/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
