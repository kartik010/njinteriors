import React from 'react'
import './styles.css'
import Image from 'next/image'
import facebook from '@/components/images/facebook.png';
import instagram from '@/components/images/instagram.png';
import linkedin from '@/components/images/linkedin.png';
const Footer = () => {
  return (
    <div className='footer'>
        <div className='heading'>
           <div> 
            
            <h1 className=' font-serif italic text-2xl font-medium tracking-wide mb-6 mt-16'>Address</h1>
            <h1 className='font-extralight text-2xl font-medium tracking-wide mb-16'>Hauz Khas, New Delhi, Delhi</h1>
            
            <h1 className=' font-serif italic text-2xl font-medium tracking-wide mb-6 mt-16'>Contact Number</h1>
            <h1 className='font-extralight text-2xl font-medium tracking-wide mb-16'>9643799666</h1>

            <h1 className=' font-serif italic text-2xl font-medium tracking-wide mb-6 mt-16'>Email</h1>
            <h1 className='font-extralight text-2xl font-medium tracking-wide mb-16'>njinterior@Interior.com</h1>
            </div>


           <div>
            <h1 className=' font-serif italic text-2xl font-medium tracking-wide mb-6 mt-16'>Socials</h1>
            <div className='flex mb-8'><Image src={facebook} alt="Facebook" width={49} height={0}/><h1 className='font-extralight text-2xl font-medium tracking-wide pl-2 pt-2'>Facebook</h1></div>
            <div className='flex mb-8'><Image src={instagram} alt="Instagram" width={49} height={0}/><h1 className='font-extralight text-2xl font-medium tracking-wide pl-2 pt-2'>Instagram</h1></div>
            <div className='flex'><Image src={linkedin} alt="LinkedIn" width={49} height={0}/><h1 className='font-extralight text-2xl font-medium tracking-wide pl-2 pt-2'>LinkendiIn</h1></div>
           </div>
        </div>
    </div>
    
  )
}

export default Footer