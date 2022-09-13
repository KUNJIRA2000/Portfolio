import './App.css';
import React from 'react'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Tools from './components/Tools'
import Socials from './components/Socials'

function App() {
  
  return (
    <div>


        <div className="column middle">
          {/* <Socials/> */}
          <Navbar/>
          {/* <Socials/> */}
          <Home/>
          <AboutMe/>
          <Tools/>
          <Projects/>
          <Contact/>
          {/* <Socials/> */}
          <Footer/>
          {/* <Socials/> */}


        </div>

        
    </div>
    
  );
}

export default App;
