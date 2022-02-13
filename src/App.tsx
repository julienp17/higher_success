import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MostSuccessfulPage from './pages/MostSuccessful';
import GameOverPage from './pages/GameOver';
import GameWinPage from './pages/GameWin';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="most-success" element={<MostSuccessfulPage />} />
      <Route path="game-over" element={<GameOverPage />} />
      <Route path="success" element={<GameWinPage />} />
    </Routes>
  );
}