import React from 'react';
import ReactDOM from 'react-dom/client';
import { CardList } from './components/CardList/CardList';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardList />
  </React.StrictMode>
);
