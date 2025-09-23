import React from 'react';
import {
  Hero,
  About,
  Skills,
  Carrier,
  Publications,
  Grants,
  Projects,
  Contact,
  Copyright,
} from './components';
import './App.scss';

function App() {
  return (
    <div id="app">
      <Hero />
      <About />
      <Skills />
      <Carrier />
      <Publications />
      <Grants />
      <Projects />
      <Contact />
      <Copyright />
    </div>
  );
}

export default App;
