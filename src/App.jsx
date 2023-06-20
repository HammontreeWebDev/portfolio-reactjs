import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import pages
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';
import HomePage from './Pages/HomePage';
import Resume from './Pages/Resume';
import Services from './Pages/Services';
import Socials from './Pages/Socials';

// import components
import { NavBar } from './components/Navbar'

export function App() {
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage nav = { < NavBar /> } />} />
    <Route path='/about_me' element={<AboutMe nav = {< NavBar />} />} />
    <Route path='/portfolio' element={<Portfolio />} />
    <Route path='/services' element={<Services nav={ < NavBar />} />} />
    <Route path='/socials' element={<Socials nav={ < NavBar />} />} />
    <Route path='/contact' element={<Contact nav={ < NavBar />} />} />
    <Route path='/resume' element={<Resume nav={< NavBar />}/>} />

  </Routes>
  </BrowserRouter>
}