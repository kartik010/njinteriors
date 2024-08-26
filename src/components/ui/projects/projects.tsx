'use client'
import React from 'react'
import './styles.css'
import Link from 'next/link';
import Image from 'next/image';
import Arrow from '@/components/images/diagonal-arrow.webp';
import Card1 from '@/components/images/card1.webp';
import Card2 from '@/components/images/card2.webp';
import Card3 from '@/components/images/card3.webp';
import Card4 from '@/components/images/card4.webp';
import Card5 from '@/components/images/card5.webp';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

const Projects = () => {
  const cards = [
    {title: 'Red Walls', image: Card1, city: 'New Delhi'},
    {title: 'Red Walls', image: Card2, city: 'New Delhi'},
    {title: 'Red Walls', image: Card3, city: 'New Delhi'},
    {title: 'Red Walls', image: Card4, city: 'New Delhi'},
    {title: 'Red Walls', image: Card5, city: 'New Delhi'},
  ];
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
    <div className='main'>
        <h2 className='text-2xl mb-16 '>Projects </h2>
        <div className='heading mb-16'>
           <motion.div
           variants={fadeIn("right",0.2)}
           initial="hidden"
           whileInView={"show"}
           > <h2 className='headingLine1 font-serif italic  xl:text-5xl font-medium tracking-wide '>Take a Look at our Most Successful Projects</h2></motion.div>
            
            <motion.div
            variants={fadeIn("up",0.2)}
            initial="hidden"
            whileInView={"show"}
            className=" bg-black rounded-full p-3 max-w-56">
                <Link href="#" passHref className="text-white mx-2 flex items-center justify-center mr-1 font-light text-xl">
                  See All Projects  
                    <div className="h-7 w-7 rounded-full bg-white flex items-center justify-center ml-2">
                        <Image src={Arrow} alt="To our projects Icon" width={16} height={16} />
                    </div>
                </Link>
            </motion.div>
            
        </div>
        {/* card component*/}
        <motion.div
        variants={fadeIn("left",0.2)}
        initial="hidden"
        whileInView={"show"}
        className='cardscroll gap-8'>
        {cards.map((card) => {
          const {title, image, city} = card;
          return (
            <div key={title} className='bg-transparent' style={{  border: "none", boxShadow: "none" }}>
              
              <Image className='rounded-xl '
                src={image}
                alt={title}
                width={400}
                style={{maxHeight:'198px'}}         
                /> 
              <h2 className='font-serif italic text-black text-xl font-light mt-5'>{title}</h2>
              <p className='font-sans  text-md font-light mt-1'>{city}</p>
            </div>
            
          )
        })}

        </motion.div>
        <div className='mobileproject'>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode,Pagination]}
        className="mySwiper">
          {cards.map((card) => {
            const {title, image, city} = card;
            return (
              <SwiperSlide key={title}>
                <Image className='rounded-xl '
                  src={image}
                  alt={title}
                  width={400}
                  style={{maxHeight:'198px'}}         
                  /> 
                <h2 className='font-serif italic text-black text-xl font-light mt-5'>{title}</h2>
                <p className='font-sans  text-md font-light mt-1 mb-16'>{city}</p>
              </SwiperSlide>
            )
          })}
        </Swiper>
        </div>

    </div>
  )
}

export default Projects;
