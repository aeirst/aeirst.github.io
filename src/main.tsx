import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './App.tsx'
import './index.css'
import WorkPage from './pages/works/App.tsx'

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/works" element={<WorkPage />} />
        </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
