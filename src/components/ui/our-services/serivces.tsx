'use client'
import React from 'react'
import './styles.css';
import Image from 'next/image';
import Link from 'next/link';
import Arrow from '@/components/images/diagonal-arrow.webp'
import ArrowForward from '@/components/images/arrow-forward-outline.svg'
import { motion } from 'framer-motion';
const Serivces = () => {
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
    <div className='services'>
        <motion.h2
        variants={fadeIn("up",0.2)}
        initial="hidden"
        whileInView={"show"}
        className='text-2xl mb-16 '>Our Services </motion.h2>
        <div className='heading'>
           <div> <h2 className='headingLine font-serif italic  text-5xl font-medium tracking-wide'>We offer a wide range of services</h2></div>
            
            <motion.div
            variants={fadeIn("up",0.2)}
            initial="hidden"
            whileInView={"show"}
            className="btnservice bg-black rounded-full p-3 max-w-56">
                <Link href="/#get-in-touch" passHref className="text-white mx-2 flex items-center justify-center mr-1 font-light text-lg ">
                  Get a Quote  
                    <div className="h-7 w-7 rounded-full bg-white flex items-center justify-center ml-2">
                        <Image src={Arrow} alt="To our projects Icon" width={16} height={16} />
                    </div>
                </Link>
            </motion.div>
            
        </div>
        <motion.div
        variants={fadeIn("down",0.2)}
        initial="hidden"
        whileInView={"show"}
        className='servicemainbox'>
            <div className='serivebox flex p-16 justify-between'><h2 className='serivcesmain text-4xl'>Home Redesigning</h2> <Image src={ArrowForward} alt="To our projects Icon" width={46} height={16}/></div>
            <div className='serivebox flex p-16 justify-between '><h2 className='serivcesmain text-4xl'>Interior detailing</h2> <Image src={ArrowForward} alt="To our projects Icon" width={46} height={16}/></div>
            <div className='serivebox flex p-16 justify-between '><h2 className='serivcesmain text-4xl'>Furniture Layout</h2> <Image src={ArrowForward} alt="To our projects Icon" width={46} height={16}/></div>
            <div className='serivebox flex p-16 justify-between '><h2 className='serivcesmain text-4xl'>Exterior Finish Selection</h2> <Image src={ArrowForward} alt="To our projects Icon" width={46} height={16}/></div>
            <div className='serivebox flex p-16 justify-between '><h2 className='serivcesmain text-4xl'>Colour and Paint Selection</h2> <Image src={ArrowForward} alt="To our projects Icon" width={46} height={16}/></div>
        </motion.div>
    </div>
  )
}

export default Serivces;