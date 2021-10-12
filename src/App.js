import React, {useState} from "react";
import './App.scss'
import TopBar from "./components/TopBar/TopBar";
import Menu from "./components/Menu/Menu";
import Intro from "./components/Intro/Intro";
import Expertise from "./components/Expertise/Expertise";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ExpertiseJs from "./components/Expertise/Expertise.js";
import AboutMe from "./components/AboutMe/AboutMe";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";

function App() {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
            <Intro/>
            <AboutMe/>
            <Education/>
            <Expertise/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
