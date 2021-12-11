import { useState, useEffect } from 'react';

import './App.css';
import Splash from "./components/Splash"
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Project from './components/Projects';
import Languages from './components/Languages';
import Contact from './components/Contact';
import { primary } from './data/colourPalette';


function App() {
  const [currentPage, setCurrentPage] = useState("about")

  useEffect(() => {
    document.title = `Jonathan Courtney - ${currentPage}`
  }, [currentPage]);
  return (
    <div className={`App bg-${primary} flex flex-col justify-between h-screen`}>
      <Navbar setCurrentPage={setCurrentPage} />
      <Splash />
      {currentPage === "about" ? <About /> : ""}
      {currentPage === "personal" ? <Project /> : ""}
      {currentPage === "languages" ? <Languages /> : ""}
      {currentPage === "contact" ? <Contact /> : ""}
      <Footer className="bottom-0 absolute" />
    </div>
  );
}

export default App;
