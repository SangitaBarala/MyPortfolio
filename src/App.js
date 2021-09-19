import React, {useState} from "react";
import './App.scss'
import TopBar from "./components/TopBar/TopBar";
import Menu from "./components/Menu/Menu";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";


function App() {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
            <Intro/>
            <Portfolio/>
            <Projects/>
            <Contact/>
        </div>
    </div>
  );
}

export default App;
