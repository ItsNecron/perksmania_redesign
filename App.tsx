
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CategoryRail from './components/CategoryRail';
import BentoGrid from './components/BentoGrid';
import Footer from './components/Footer';
import { GlobalProvider } from './context/GlobalContext';
import ToastContainer from './components/Toast.tsx';

function App() {
  return (
    <GlobalProvider>
      <div className="min-h-screen text-slate-900 font-sans selection:bg-brand-teal selection:text-white">
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
