import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, StarsCanvas, Works } from './components';
import RugbyTactics from './pages/RugbyTactics';
import HockeyChess from './pages/HockeyChess';
import CleanTheCity from './pages/CleanTheCity';
import CoronaWarrior from './pages/CoronaWarrior';
import SpinWarrior from './pages/SpinWarrior';
import DiseaseFighter from './pages/DiseaseFighter';

const Home = () => (
  <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Works />
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
  </div>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/rugby-tactics" element={<RugbyTactics />} />
      <Route path="/projects/hockey-chess" element={<HockeyChess />} />
      <Route path="/projects/clean-the-city" element={<CleanTheCity />} />
      <Route path="/projects/corona-warrior" element={<CoronaWarrior />} />
      <Route path="/projects/spin-warrior" element={<SpinWarrior />} />
      <Route path="/projects/disease-fighter" element={<DiseaseFighter />} />
    </Routes>
  );
};

export default App;
