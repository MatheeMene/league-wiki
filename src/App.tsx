import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, About, Champions } from './pages';
import { Header } from './components';

const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/champions" element={<Champions />} />
  </Routes>
);

const App: React.FC = () => (
  <>
    <Header />
    <div className="main__content">
      <AppRouter />
    </div>
  </>
);

export default App;
