
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './pages/Navigation';
import Hero from './pages/Hero';
import CategoryRail from './pages/CategoryRail';
import BentoGrid from './pages/BentoGrid';
import Footer from './pages/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import { GlobalProvider } from './context/GlobalContext';
import ToastContainer from './pages/Toast.tsx';

function App() {
  return (
    <Router>
      <GlobalProvider>
        <div className="min-h-screen text-slate-900 font-sans selection:bg-brand-accent selection:text-white">
          <Routes>
            <Route path="/" element={
              <>
                <Navigation />
                <main>
                  <Hero />
                  <CategoryRail />
                  <BentoGrid />
                </main>
                <Footer />
              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <ToastContainer />
        </div>
      </GlobalProvider>
    </Router>
  );
}

export default App;
