
import React from 'react';
import Navigation from './pages/Navigation';
import Hero from './pages/Hero';
import CategoryRail from './pages/CategoryRail';
import BentoGrid from './pages/BentoGrid';
import Footer from './pages/Footer';
import { GlobalProvider } from './context/GlobalContext';
import ToastContainer from './pages/Toast.tsx';

function App() {
  return (
    <GlobalProvider>
      <div className="min-h-screen text-slate-900 font-sans selection:bg-brand-accent selection:text-white">
        <Navigation />
        <main>
          <Hero />
          <CategoryRail />
          <BentoGrid />
        </main>
        <Footer />
        <ToastContainer />
      </div>
    </GlobalProvider>
  );
}

export default App;
