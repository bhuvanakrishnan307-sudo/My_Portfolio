import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
// import AddStudent from '../Redux/AddStudent';
// import App1 from './App1.js';
//import App2 from './App2.js';
//import App3 from './App3.js';
//import App4 from './App4.js';
//import App5 from './App5.js';
//import Student from './Student';
//import Age from './Age';
//import App6 from './App6';
//import App8 from './App8';
//import Example1 from './Example1';
// import AppRouter from './AppRouter';
// import Approute from './Approute';
// import Profile from './Profile';
//  import Image from './Image';
// import { Provider } from 'react-redux';
// import AddStudent from './Props/AddStudent';
// import ViewStudent from './Redux/ViewStudent';
//import UserList from "./UserList";
//import Sliding from './Sliding';
import  Portfolio from './Portfolio';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    <React.StrictMode>
      <Portfolio/>
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
