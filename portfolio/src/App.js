import { useState } from 'react';

import './App.css';
import Splash from "./components/Splash"
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Project from './components/Projects';
import Languages from './components/Languages';


function App() {
  const [currentPage, setCurrentPage] = useState("about")
  return (
    <div className="App bg-black flex flex-col justify-between h-screen">
      <Navbar setCurrentPage={setCurrentPage} />
      <Splash />
      {currentPage === "about" ? <About /> : ""}
      {currentPage === "project" ? <Project /> : ""}
      {currentPage === "languages" ? <Languages /> : ""}
      <Footer className="bottom-0 absolute" />
    </div>
  );
}

export default App;
