import React from "react";
import NavMenu from "./components/NavMenu/NavMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/ContactMe/Contact";
import Resume from "./components/Resume/Resume";
import Testimonial from "./components/Testimonial/Testimonial";
import Projects from "./components/Projects/Projects";
import SmoothScrollBar from "./components/SmoothScrollBar";
import Footer from "./components/Footer";
//import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <SmoothScrollBar>
        <Routes>
          <Route path="/aboutme" element={<AboutMe />}>
        
          </Route>
          <Route path="/resume" element={<Resume />}>
            
          </Route>
          <Route path="/testimonial" element={<Testimonial />}>
            
          </Route>
          <Route path="/projects" element={<Projects />}>
            
          </Route>
          <Route path="/contactme" element={<Contact />}>
          
          </Route>
          <Route path="/" element={<Home />}>
            
          </Route>
        </Routes>
                 
        <Footer/>
        </SmoothScrollBar>
      </Router>
    </>
  );
}


