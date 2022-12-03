import React from "react";
import { NavbarAnimation } from "./components/Navbar";
import { WelcomeAnimation } from "./components/Welcome";

// general css for the page
import './assets/css/style.css';

// declare any variables
const aboutNav = 'About Me';
const portfolioNav = 'Portfolio';
const contactNav = 'Contact';
const resumeNav = 'Resume';

// init function to get homepage rendered with animations
export function Init() {
  return (
    <>
      <NavbarAnimation about={aboutNav} portfolio={portfolioNav} contact={contactNav} resume={resumeNav} />
      <WelcomeAnimation />
    </>
  );
};