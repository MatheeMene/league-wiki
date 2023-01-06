import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, About } from './pages';

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
);

export default App;
