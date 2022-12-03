import React from "react";
import Navbar from "./components/navbar";

// general css for the page
import './assets/css/style.css';

// declare any variables
const aboutNav = 'About Me';
const portfolioNav = 'Portfolio';
const contactNav = 'Contact';
const resumeNav = 'Resume';

// call components to be rendered
function App() {
  return (
    <>
      <Navbar about={aboutNav} portfolio={portfolioNav} contact={contactNav} resume={resumeNav} />
    </>
  );
};

export default App;
