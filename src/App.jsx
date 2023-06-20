import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import pages
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';
import HomePage from './Pages/HomePage';
import Resume from './Pages/Resume';
import Services from './Pages/Services';
import Socials from './Pages/Socials';
import PortfolioPage from './Pages/PortfolioPage';

// import components
import { NavBar } from './components/Navbar'

export function App() {
  return(
  <BrowserRouter>
  <NavBar />
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/about_me' element={<AboutMe />} />
    <Route path='/portfolio' element={<PortfolioPage />} />
    <Route path='/services' element={<Services />} />
    <Route path='/socials' element={<Socials />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/resume' element={<Resume />} />

  </Routes>
  </BrowserRouter>
  )
}