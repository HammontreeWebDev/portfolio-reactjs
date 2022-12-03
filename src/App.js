import React from "react";
import { NavbarAnimation, NavbarDeleteName, MainNavbar } from "./components/Navbar";
import { WelcomeAnimation, DeleteWelcome } from "./components/Welcome";

// general css for the page
import './assets/css/style.css';

// declare any variables
const aboutNav = 'About Me';
const portfolioNav = 'Portfolio';
const contactNav = 'Contact';
const resumeNav = 'Resume';

// component init function to get homepage rendered with initial animations
export function Init() {
  return (
    <>
      <NavbarAnimation about={aboutNav} portfolio={portfolioNav} contact={contactNav} resume={resumeNav} />
      <WelcomeAnimation />
    </>
  );
};

// component function to delete name in navbar and logo/name in body
export function DeleteName() {
  return (
    <>
    <NavbarDeleteName about={aboutNav} portfolio={portfolioNav} contact={contactNav} resume={resumeNav}/>
    <DeleteWelcome/>
    </>
  )
}

// function to render final landing page
export function LandingPage() {
  return (
    <>
    <MainNavbar about={aboutNav} portfolio={portfolioNav} contact={contactNav} resume={resumeNav}/>
    </>
  )
}