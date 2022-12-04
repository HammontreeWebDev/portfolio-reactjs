import React, { useState } from 'react';
import { NavBar } from "./components/Navbar";
import { WelcomeAnimation, DeleteWelcome } from "./components/Welcome";
import AboutMe from "./components/AboutMe";
import Project from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

// general css for the page
import './assets/css/style.css';

// declare any variables
const aboutNav = 'About Me';
const portfolioNav = 'Portfolio';
const contactNav = 'Contact';
const resumeNav = 'Resume';

// Render welcome animation as page initializes
export function Init() {
  return (
      <WelcomeAnimation />
  );
};

// transition out welcome animation
export function DeleteName() {
  return (
    <DeleteWelcome />
  )
}

// function to render final landing page where we will show and hide components based on user input
export function LandingPage() {

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

  return (
    <>
    <NavBar about={aboutNav} showAbout={aboutClick} portfolio={portfolioNav} showPortfolio={portfolioClick} contact={contactNav} showContact={contactClick} resume={resumeNav} showResume={resumeClick}/>

    {showAbout ? <AboutMe /> : null}
    {showPortfolio ? <Project /> : null}
    {showContact ? <Contact /> : null}
    {showResume ? <Resume /> : null}
    </>
  )
}