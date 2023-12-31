import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

import { BooksProvider } from './BooksContext';
ReactDOM.render(
  <HashRouter>
   <BooksProvider>  
    <App />
    </BooksProvider>  
  </HashRouter>,
  document.getElementById('root')
);