import React from 'react'
import { motion } from "framer-motion";

import ExpandImageOnScroll from "./ExpandImageOnScroll";
import logo from "../assets/logo.png";
import Academics from './Academics';
import Faculty from "./Faculty";
import Events from "./Events";
import Gallery from "./Gallery"
import Contact from "./Contact"

import AnimatedSection from '../components/AnimatedSection'

export default function Home(){
  return (
    <div>
      <AnimatedSection>
       <div className='flex justify-center w-full'> <img src={ logo} className='w-[150px] t' alt="" /></div>
        <motion.h1  initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }} className="text-[50px] font-light text-center">Thiraavid</motion.h1>
       
       
        <motion.p initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }} className="text-[100px] font-light text-center">Welcome to Kambaa International School</motion.p>
        <motion.p initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }} className='text-center'>Nurturing Young Minds for a Brighter Tomorrow</motion.p>
      </AnimatedSection>
      <ExpandImageOnScroll />
      <Academics />
      <Faculty />
 
      <Events />
      <Gallery />
      <Contact/>
    </div>
  )
}
