import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import AboutSpring from '../../components/AboutSpring/AboutSpring';
import Projects from '../../components/Projects/Projects';
import AtticProjects from '../../components/AtticProjects/AtticProjects';
import Support from '../../components/Support/Support';
import './Home.css';

function Home() {
  return (
    <div>
      <Header />
      <AboutSpring />
      <Projects />
      <AtticProjects />
      <Support />
      <Footer />
    </div>
  );
}

export default Home;
