import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Starfield from './components/Starfield';
import Navigation from './components/Navigation';
import PageTransition from './components/PageTransition';

import Landing from './pages/Landing';
import Universe from './pages/Universe';
import Chapter from './pages/Chapter';

// Wrapper for AnimatePresence to work with routes
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageTransition transitionType="fade">
              <Landing />
            </PageTransition>
          } 
        />
        <Route 
          path="/universe" 
          element={
            <PageTransition transitionType="zoom">
              <Universe />
            </PageTransition>
          } 
        />
        <Route 
          path="/chapter/:id" 
          element={
            <PageTransition transitionType="fade">
              <Chapter />
            </PageTransition>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      {/* Global Background */}
      <Starfield />
      
      {/* Global Navigation Shell */}
      <Navigation />
      
      {/* Animated Route Content */}
      <div className="w-full min-h-screen relative">
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
