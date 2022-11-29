import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Home from './pages/Home';
import Header from './components/Header';
import { BrowserRouter } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header/>
  <Home/>
  </BrowserRouter>
);
