import React from 'react'
import { motion } from 'framer-motion'

export default function AnimatedSection({children}){
  return (
    <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mb-8">
      {children}
    </motion.div>
  )
}
