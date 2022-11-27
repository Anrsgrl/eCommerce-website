import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MyRouter from './routes/MyRouter';

function App() {
  return (
      <>
      <BrowserRouter>
        <MyRouter/>
      </BrowserRouter>
      </>
  );
}

export default App;
