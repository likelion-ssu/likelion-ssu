import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, News, Project, Recruit, ColorChange } from './pages';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/project" element={<Project />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/colorchange" element={<ColorChange />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
