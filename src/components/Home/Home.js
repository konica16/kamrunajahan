import React from "react";
import Profile from "./Profile";
import "./Home.css"
import AboutMe from "../AboutMe/AboutMe";
import ServicesSection from "../ServicesSection";
import Projects from "../Projects/Projects";
import Testimonial from '../Testimonial/Testimonial'
import Resume from "../Resume/Resume";
import Contact from "../ContactMe/Contact";

export default function Home() {
  return (
    <div className='home-container'>
    <Profile/>
    <AboutMe/>
    <ServicesSection/>
    <Resume/>    
    <Projects/>
    <Testimonial/> 
    <Contact/>    
 </div>
    );
}
