'use client'
import React from 'react'
import Image from 'next/image';
import Eclips from '@/components/images/Ellipse.png';
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
const Testimonial = () => {
  return (
    <div className='testimonials'>
        <h1 className='text-2xl mb-16 '>Testimonials</h1>
            <motion.div 
             variants={fadeIn("right",0.2)}
             initial="hidden"
             whileInView={"show"}
            >
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode,Pagination]}
        className="mySwiper"
        >     
            <SwiperSlide className='mb-16'><p>Exceptional passion and unwavering commitment to excellence define this interior design team!  Our space has been <br /> transformed into a masterpiece, exceeding all expectations</p> 
            <div className='sub flex gap-8 mt-8'> 
            <div>
                <Image 
                    src={Eclips}
                    alt="eclips"
                    width={50}
                    height={50}

                />
            </div> 
            <div>
            <h2>Kartik Sharma</h2>
            <p>New Delhi</p>
            </div>
            </div></SwiperSlide>
            <SwiperSlide className='mb-16'><p>Passionate about design, committed to excellence - this team delivers on every level! Our project was handled with utmost <br /> care and attention to detail, resulting in a stunning outcome.</p> 
            <div className='sub flex gap-8 mt-8'> 
            <div>
                <Image 
                    src={Eclips}
                    alt="eclips"
                    width={50}
                    height={50}

                />
            </div> 
            <div>
            <h2>Kartik Sharma</h2>
            <p>New Delhi</p>
            </div>
            </div></SwiperSlide>
            <SwiperSlide className='mb-16'><p>Excellence in design meets unwavering passion! Working with this team was a dream. Their dedication to perfection is evident in every corner of our space. Thrilled doesnt begin to cover it</p> 
            <div className='sub flex gap-8 mt-8'> 
            <div>
                <Image 
                    src={Eclips}
                    alt="eclips"
                    width={50}
                    height={50}

                />
            </div> 
            <div>
            <h2>Kartik Sharma</h2>
            <p>New Delhi</p>
            </div>
            </div></SwiperSlide>
            <SwiperSlide className='mb-16'> <p>The teams passion for their work and commitment to excellence is evident in every aspect of the design.We couldnt be more thrilled with the outcome <br /><br /></p> 
            <div className='sub flex gap-8 mt-8'> 
            <div>
                <Image 
                    src={Eclips}
                    alt="eclips"
                    width={50}
                    height={50}

                />
            </div> 
            <div>
            <h2>Kartik Sharma</h2>
            <p>New Delhi</p>
            </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className='mb-16'><p>Passion and excellence converge seamlessly with this interior design team! Their dedication to crafting spaces that exceed expectations is unmatched. </p> 
            <div className='sub flex gap-8 mt-8'> 
            <div>
                <Image 
                    src={Eclips}
                    alt="eclips"
                    width={50}
                    height={50}

                />
            </div> 
            <div>
            <h2>Kartik Sharma</h2>
            <p>New Delhi</p>
            </div>
            </div></SwiperSlide>
            <SwiperSlide className='mb-16'><p>Choosing this team was the best decision! Their passion for design and dedication to excellence are unparalleled. Our space is now a true reflection of our vision.</p> 
            <div className='sub flex gap-8 mt-8'> 
            <div>
                <Image 
                    src={Eclips}
                    alt="eclips"
                    width={50}
                    height={50}

                />
            </div> 
            <div>
            <h2>Kartik Sharma</h2>
            <p>New Delhi</p>
            </div>
            </div></SwiperSlide> 
        </Swiper>
            </motion.div>
    </div>
  )
}

export default Testimonial