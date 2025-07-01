import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation.tsx';
import CaseStudies from './pages/CaseStudies.tsx';
import AboutMe from './pages/AboutMe.tsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/case-studies" replace />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
