import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Main } from './components/Main';
import { Opening } from './components/Opening';
import { Test } from './components/Test';
import { Shorts } from './components/Shorts';
import { ResultPage } from './components/ResultPage';
import './App.css';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();
  return (
      <Routes location={location}>
        <Route path="/" element={<  Opening />} />
        <Route path="/main" element={<  Main />} />
        <Route path="/test/:id" element={<  Test />} />
        <Route path="/shorts" element={<  Shorts />} />
        <Route path="/result/:id" element={<  ResultPage />} />
      </Routes>
  );
}

export default App;
