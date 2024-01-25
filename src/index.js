import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Store } from "../../store";
//import { Store } from './store';
import { store } from './store';
import { Provider } from "react-redux";
//import {BrowserRouter} from 'react-router-dom';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import { Home } from './Update_Context_Api_Reducer/Home';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpvTXKJ3A1--_CmNi3Uwvk7P3EaSn0biQ",
  authDomain: "react-chat-app-16c1c.firebaseapp.com",
  databaseURL: "https://react-chat-app-16c1c-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-16c1c",
  storageBucket: "react-chat-app-16c1c.appspot.com",
  messagingSenderId: "848499733988",
  appId: "1:848499733988:web:dea0f4c184282bdc2983f1",
  measurementId: "G-8HSVW4FZ6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
ReactDOM.render(
  
   <React.StrictMode>
   
    
    <Provider store={store}>
    
         <App/>
    
   
    </Provider>
        
    
   
         
     
   </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
