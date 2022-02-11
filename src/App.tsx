import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './views/LandingPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}