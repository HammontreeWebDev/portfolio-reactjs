import React from "react";
import { NavBar } from "./components/Navbar";
import { WelcomeAnimation, DeleteWelcome } from "./components/Welcome";

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
  
  return (
    <>
    <NavBar about={aboutNav} portfolio={portfolioNav} contact={contactNav} resume={resumeNav}/>
    </>
  )
}