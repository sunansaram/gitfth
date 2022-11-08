import './App.css';
import './components/common/Button.css';
import './components/common/Color.css';
import './components/auth/AuthTemplateBlock.css';
import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <LoginPage />
    </>
  );
}

export default App;
