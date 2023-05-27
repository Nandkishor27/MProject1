import React from 'react'
import { useEffect } from 'react';
import { useGlobalContext } from "./context";
import HeroSection from './components/HeroSection'


const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() =>  updateHomePage(), []);

  return (
   <HeroSection />
  )
}

export default Home
