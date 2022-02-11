import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ChooseMostSuccess from './pages/ChooseMostSuccess';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="most-success" element={<ChooseMostSuccess />} />
    </Routes>
  );
}