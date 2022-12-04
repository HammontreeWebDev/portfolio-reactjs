import React, { useState } from 'react';
import { NavBar } from "./components/Navbar";
import { WelcomeAnimation, DeleteWelcome } from "./components/Welcome";
import AboutMe from "./components/AboutMe";
import Project from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import mtgApp from "./assets/img/mtgpp.png"
import pokeApp from "./assets/img/pokewire.png"


// declare any variables
let aboutNav = 'About Me';
let portfolioNav = 'Portfolio';
let contactNav = 'Contact';
let resumeNav = 'Resume';

const customNav = document.querySelector('.custom-nav');

// Render welcome animation as page initializes
export function Init() {
  return (
    <WelcomeAnimation />
  );
};

// transition out welcome animation
export function WelcomeTransition() {
  return (
    <DeleteWelcome />
  )
}

// function to render App after intro animations
export function App() {

  // reusable to set all states to false in order to show only the content we want to
  const setAll = (isFalse) => {
    setShowAbout(isFalse);
    setShowPortfolio(isFalse);
    setShowContact(isFalse);
    setShowResume(isFalse);
  }

  const [showAbout, setShowAbout] = useState(false);
  const aboutClick = () => {
    setAll(false);
    setShowAbout(true);
  };

  const [showPortfolio, setShowPortfolio] = useState(false);
  const portfolioClick = () => {
    setAll(false);
    setShowPortfolio(true);
  };

  const [showContact, setShowContact] = useState(false);
  const contactClick = () => {
    setAll(false);
    setShowContact(true);
  };

  const [showResume, setShowResume] = useState(false);
  const resumeClick = () => {
    setAll(false);
    setShowResume(true);
  };

  // showAbout ? aboutNav = null : aboutNav = 'About Me';
  // showPortfolio ? portfolioNav = null : portfolioNav = 'Portfolio';
  // showContact ? contactNav = null : contactNav = 'Contact';
  // showResume ? resumeNav = null : resumeNav = 'Resume';

  return (
    <>
      <NavBar about={aboutNav} showAbout={aboutClick} portfolio={portfolioNav} showPortfolio={portfolioClick} contact={contactNav} showContact={contactClick} resume={resumeNav} showResume={resumeClick} />

      {/* conditionally render aboutme section if button is clicked */}
      {showAbout ? <AboutMe /> : null}

      {/* show several Project components based on finished projects we have to display */}
      { showPortfolio ? 
      <main className='portfolio-body'>
      <Project src={mtgApp} alt={'screenshot of MGT++ deck building application'} caption={'Hello World'}/>
      <Project src={pokeApp} alt={'screenshot of MGT++ deck building application'} caption={'Hello World'}/>
      </main> 
      : null }

      {/* conditionally render contact section if button is clicked */}
      {showContact ? <Contact /> : null}

      {/* conditionally render resume section if button is clicked */}
      {showResume ? <Resume /> : null}
    </>
  )
};