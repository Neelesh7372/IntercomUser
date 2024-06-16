import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import AuthScreen from './components/AuthScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthScreen />} />
        <Route path="/" element={<WelcomeScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
