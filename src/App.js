import React from 'react';
import Hero from './components/Hero';
import WhoAreWe from './components/WhoAreWe';
import Agenda from './components/Agenda';
import Chiefguest from './components/Chiefguest';
import Speakers from './components/Speakers';
import Sponsors from './components/Sponsors';
import FooterWrapper from './components/FooterWrapper';
import './App.css';

function App() {
  return (

    <div className="App">
      <Hero />
      <WhoAreWe />
      <Agenda />
      <Chiefguest/>
      <Speakers/>
      <Sponsors/>
      <FooterWrapper />
    </div>
  );
}

export default App;