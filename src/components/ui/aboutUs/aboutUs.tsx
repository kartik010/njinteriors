'use client'
import React from 'react'
import './styles.css';
import sideImage1 from '@/components/images/side1.webp';
import sideImage2 from '@/components/images/side2.webp';
import mobileimg from '@/components/images/about.webp';
import mobileimg2 from '@/components/images/aboutus.webp';
import Image from 'next/image';
import {motion} from 'framer-motion';
const AboutUs = () => {
  const fadeIn = (direction: string, delay: number) => (
    {
        hidden: {
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    }
  )
  return (
    <div className='section'>
      <h2 className='text-2xl mb-16 '>About Us </h2>
      <div className='sectionInside'>
      <motion.p
       variants={fadeIn("left",0.2)}
       initial="hidden"
       whileInView={"show"}
      className='section-aboutus font-serif italic  xl:text-5xl font-medium tracking-wide mb-8 lg:text-3xl'>Your home Your rerflection With Two Decades Of Experience and Experties In Crafting Interior Designe we posses Experties Experience In Creating Exceptional Spaces Just for you.</motion.p>
      
      <motion.div
       variants={fadeIn("right",0.2)}
       initial="hidden"
       whileInView={"show"}
      className='images'><Image src={sideImage1} alt='side image'/><br/><Image src={sideImage2} alt='side image'/></motion.div>
      <motion.div
       variants={fadeIn("right",0.2)}
       initial="hidden"
       whileInView={"show"}
      className='mobileimg'><Image src={mobileimg} alt='side image'/></motion.div>
      
      </div>
      
      <motion.div
         variants={fadeIn("up",0.2)}
         initial="hidden"
         whileInView={"show"}
        className='numbers font-serif italic flex gap-8 text-2xl mt-16 md:overflow-hidden'>
        <div className=''><h1 className='headingNumber text-4xl pl-4'>300+</h1><br/><h4 className='number-heading font-serif italic'>Sucessfull Projects</h4></div>
        <div className=''><h1 className='headingNumber text-4xl pl-4'>200+</h1><br/><h4 className='number-heading font-serif italic'>Premium Products</h4></div>
        <div className=''><h1 className='headingNumber text-4xl pl-4'>180k</h1><br/><h4 className='number-heading font-serif italic'>Happy Customers</h4></div>
      </motion.div>
    </div>
  )
}

export default AboutUs; 