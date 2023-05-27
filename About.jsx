import React from 'react'
import { useEffect } from 'react';
import { useGlobalContext } from "./context";
import HeroSection from './components/HeroSection'

const About = () => {
  const { udpateAboutPage } = useGlobalContext();

  useEffect(() => udpateAboutPage(), []);
  
  return (
       <HeroSection  />
  )
}

export default About
