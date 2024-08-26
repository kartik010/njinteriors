'use client'
import React from 'react'
import Image from 'next/image';
import HeroImage from '@/components/images/hero-background.webp'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
const Hero = () => {
 
    const [textone] = useTypewriter({
      words: ['Where Every Space'],
      typeSpeed:120
    })
    const [texttwo] = useTypewriter({
      words: ['Tells a story'],
      typeSpeed:120
    })
  return (

    <div className='flex justify-between items-center'>
      <div style={{margin:'auto'}}>
        <h1 className='heading1 font-serif italic text-white text-6xl text-center' style={{margin:'auto', marginTop:'3rem'}}>{textone}</h1>
        <h1 className='heading2 font-serif italic text-white text-4xl ' style={{margin:'auto', marginTop:'1rem'}}>{texttwo} {<Cursor cursorStyle='!'/>}</h1>
        
      </div>
    <>
    <Image
      src={HeroImage}
      alt="Hero image"
      style={{
        overflow:'hidden',
        position:'absolute',
        top:0,
        zIndex: -1,
        cursor:'none',
        height: '72vh',
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
        objectFit: 'cover',
      }}
      loading="lazy"
      quality={100}
    /></>
    </div>
  )
}

export default Hero