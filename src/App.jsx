import React, { useState } from 'react';
import { NavBar } from "./components/Navbar/Navbar";
import { WelcomeAnimation, DeleteWelcome } from "./components/Welcome/Welcome";
import AboutMe from "./components/AboutMe/AboutMe";
import Project from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import Swal from 'sweetalert2';

// import imgs needed for projects
import mtgApp from "./assets/img/mtgpp.webp";
import pokeApp from "./assets/img/pokewire.webp";
import readMe from "./assets/img/READMEGENERATOR.webp";
import weatherDashboard from "./assets/img/WeatherDashboard.webp";
import outtaTouch from "./assets/img/outta-touch.webp";
import brofit from "./assets/img/brofit.webp";

// since we are rendering the main tag around the portfolio components, we import portfolio css here:
import './components/Portfolio/portfolio.css';

// declare any variables
let aboutNav = 'About Me';
let portfolioNav = 'Portfolio';
let contactNav = 'Contact';
let resumeNav = 'Resume';

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
  const setAll = (isFalse, e) => {
    setShowAbout(isFalse);
    setShowPortfolio(isFalse);
    setShowContact(isFalse);
    setShowResume(isFalse);
    setShowHome(isFalse);
  }

  const hightlightNav = (e, elem) => {
    const navItem = document.getElementsByClassName('nav-font');

    for (let i = 0; i < navItem.length; i++) {

      navItem[i].style = `
      text-shadow: none;
      `;

      if (e.target === navItem[i]) {
        e.target.style = `
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px var(--light-blue), 0 0 70px var(--light-blue), 0 0 80px var(--light-blue), 0 0 100px var(--light-blue), 0 0 150px var(--light-blue);
      `;
      }

      if (elem === navItem[0]) {
        elem.style = `
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px var(--light-blue), 0 0 70px var(--light-blue), 0 0 80px var(--light-blue), 0 0 100px var(--light-blue), 0 0 150px var(--light-blue);
        `;
      }
    }
  }

  const [showHome, setShowHome] = useState(true);

  const [showAbout, setShowAbout] = useState(false);
  const aboutClick = (e, elem) => {
    setAll(false);
    setShowAbout(true);
    hightlightNav(e, elem);
  };

  const [showPortfolio, setShowPortfolio] = useState(false);
  const portfolioClick = (e) => {
    setAll(false);
    setShowPortfolio(true);
    hightlightNav(e);
  };

  const [showContact, setShowContact] = useState(false);
  const contactClick = (e) => {
    setAll(false);
    setShowContact(true);
    hightlightNav(e);
  };

  const [showResume, setShowResume] = useState(false);
  const resumeClick = (e) => {
    setAll(false);
    setShowResume(true);
    hightlightNav(e);
  };

  // showAbout ? aboutNav = null : aboutNav = 'About Me';
  // showPortfolio ? portfolioNav = null : portfolioNav = 'Portfolio';
  // showContact ? contactNav = null : contactNav = 'Contact';
  // showResume ? resumeNav = null : resumeNav = 'Resume';

  const privateAlert = () => {
    Swal.fire({
      icon: 'info',
      title: 'Content Not Available',
      text: 'Due to request, this GitHub repository is private. You may view the deployed application by using the preview button.',
    })
  }

  return (
    <>
      <NavBar about={aboutNav} showAbout={aboutClick} portfolio={portfolioNav} showPortfolio={portfolioClick} contact={contactNav} showContact={contactClick} resume={resumeNav} showResume={resumeClick} />
      {/* Initially show the 'home page' */}
      {showHome ? <HomePage /> : null}

      {/* conditionally render aboutme section if button is clicked */}
      {showAbout ? <AboutMe /> : null}

      {/* show several Project components based on finished projects we have to display */}
      {showPortfolio ?
        <main className='portfolio-body'>
          {/* BroFit Personal Training */}
          <Project src={brofit} deployment={'https://www.reesewilder.com/'} click={privateAlert} alt={'screenshot of BroFit Personal Training website'} appTitle={'BroFit Personal Training'} content={'HTML | BootStrap | CSS | JavaScript'} />
          {/* Outta-Touch */}
          <Project src={outtaTouch} deployment={'https://outta-touch.herokuapp.com/'} repository={'https://github.com/argounova/outta-touch'} alt={'screenshot of outta touch application'} appTitle={'OUTTA TOUCH'} content={'MERN stack | Apollo | Websocket/GraphQL subscriptions'} />
          {/* MTG ++ App */}
          <Project src={mtgApp} deployment={'https://peaceful-escarpment-11973.herokuapp.com/'} repository={'https://github.com/HammontreeWebDev/MTGpp'} alt={'screenshot of MGT++ deck building application'} appTitle={'MTG++'} content={'Node.js | Express.js | MySQL | JavaScript | jQuery | Handlebars | Bootstrap | CSS'} />
          {/* PokéWire App */}
          <Project src={pokeApp} deployment={'https://luckysal.github.io/pokewire/index.html'} repository={'https://github.com/LuckySal/pokewire'} alt={'screenshot of PokéWire application'} appTitle={'PokéWire'} content={'HTML5 | JavaScript | jQuery | Bulma | CSS | API'} />
          {/* The README Generator Node App */}
          <Project src={readMe} deployment={'https://github.com/HammontreeWebDev/The-README-Generator/blob/main/README.md'} repository={'https://github.com/HammontreeWebDev/The-README-Generator'} alt={'screenshot of The README Generator'} appTitle={'The README Generator'} content={'Node.js | JavaScript | CLI | Inquirer'} />
          {/* Weather Dashboard App */}
          <Project src={weatherDashboard} deployment={'https://hammontreewebdev.github.io/Weather-Dashboard/'} repository={'https://github.com/HammontreeWebDev/Weather-Dashboard'} alt={'screenshot of Weather Dashboard'} appTitle={'Weather Dashboard'} content={'HTML5 | Bootstrap | CSS | JavaScript | jQuery'} />
        </main>
        : null}

      {/* conditionally render contact section if button is clicked */}
      {showContact ? <Contact /> : null}

      {/* conditionally render resume section if button is clicked */}
      {showResume ? <Resume /> : null}

      <Footer />
    </>
  )
};