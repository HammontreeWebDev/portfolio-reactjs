import React from "react";
import Project from "../../components/Portfolio";
import Swal from 'sweetalert2';
import '../../components/Portfolio/portfolio.css';

// import imgs needed for projects
import mtgApp from "../../assets/img/mtgpp.webp";
import pokeApp from "../../assets/img/pokewire.webp";
import outtaTouch from "../../assets/img/outta-touch.webp";
import brofit from "../../assets/img/brofit.webp";
import { NavBar } from "../../components/Navbar";

const PortfolioPage = (props) => {

  const privateAlert = () => {
    Swal.fire({
      icon: 'info',
      title: 'Content Not Available',
      text: 'Due to request, this GitHub repository is private. You may view the deployed application by using the preview button.',
    })
  }

  return (
    <>
      <main className='portfolio-body'>
        {/* BroFit Personal Training */}
        <Project src={brofit} deployment={'https://www.reesewilder.com/'} click={privateAlert} alt={'screenshot of BroFit Personal Training website'} appTitle={'BroFit Personal Training'} content={'HTML | BootStrap | CSS | JavaScript'} />
        {/* Outta-Touch */}
        <Project src={outtaTouch} deployment={'https://outta-touch.herokuapp.com/'} repository={'https://github.com/argounova/outta-touch'} alt={'screenshot of outta touch application'} appTitle={'OUTTA TOUCH'} content={'MERN stack | Apollo | Websocket/GraphQL subscriptions'} />
        {/* MTG ++ App */}
        <Project src={mtgApp} deployment={'https://peaceful-escarpment-11973.herokuapp.com/'} repository={'https://github.com/HammontreeWebDev/MTGpp'} alt={'screenshot of MGT++ deck building application'} appTitle={'MTG++'} content={'Node.js | Express.js | MySQL | JavaScript | jQuery | Handlebars | Bootstrap | CSS'} />
        {/* PokéWire App */}
        <Project src={pokeApp} deployment={'https://luckysal.github.io/pokewire/index.html'} repository={'https://github.com/LuckySal/pokewire'} alt={'screenshot of PokéWire application'} appTitle={'PokéWire'} content={'HTML5 | JavaScript | jQuery | Bulma | CSS | API'} />
      </main>
    </>
  )
}

export default PortfolioPage;