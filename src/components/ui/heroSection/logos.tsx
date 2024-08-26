import React from 'react';
import Image from 'next/image'
import logo1 from '@/components/images/3m.svg';
import logo2 from '@/components/images/barstool-store.svg';
import logo3 from '@/components/images/budweiser.svg';
import logo4 from '@/components/images/buzzfeed.svg';
import logo5 from '@/components/images/forbes.svg';
import logo6 from '@/components/images/macys.svg';
import logo7 from '@/components/images/menshealth.svg';
import logo8 from '@/components/images/mrbeast.svg';
import '@/components/ui/heroSection/styles.css';
import { Container, Hidden } from '@mui/material';
const logo = [{src:logo1, alt:"logo"},{src:logo2, alt:"logo"},{src:logo3, alt:"logo"},{src:logo4, alt:"logo"},{src:logo5, alt:"logo"},{src:logo6, alt:"logo"},{src:logo7, alt:"logo"},{src:logo8, alt:"logo"}]
const logos = () => {
  return (
    <div className="logos"style={{overflow:'hidden'}} >
        <div className="logo-slide"style={{display:'flex',flexDirection:'row',justifyContent:'space-between',}}>
      {logo.map((logo, index) => (
        <Image
          key={index}
          src={logo.src}
          height={50}
          width={0}
          alt={logo.alt}
          style={{ height: 50, margin: '0 48px' }}
        />
      ))}
      {logo.map((logo, index) => (
        <Image
          key={index}
          src={logo.src}
          height={50}
          width={0}
          alt={logo.alt}
          style={{ height: 50, margin: '0 48px' }}
        />
      ))}
    </div>
    </div>
  )
}

export default logos