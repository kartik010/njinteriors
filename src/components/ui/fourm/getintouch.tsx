'use client'
import React, { useState } from 'react'
import './styles.css';
import { motion } from 'framer-motion';
const Getintouch = () => {
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    service: 'Home Redesigning',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert('Form submitted successfully!');
  };
  return (
    <>
    <div className='getintouch'>
        <motion.h2
        variants={fadeIn("down",0.2)}
        initial="hidden"
        whileInView={"show"}
        className='text-2xl mb-16 '>Get In Touch</motion.h2>
        <div className='heading'>
           <div> <h2 className='headingLine font-serif italic  text-5xl font-medium tracking-wide mb-16'>We Would Love To Hear From You</h2></div>
        </div>
        <motion.div
        variants={fadeIn("down",0.2)}
        initial="hidden"
        whileInView={"show"}
        className='servicemainbox'>
        
        <form onSubmit={handleSubmit}>
        <div className='mb-16' >
          <label className='font-serif italic  text-2xl font-medium' htmlFor="name">Name:</label>
          <input className='input ml-8 rounded-md px-16 py-2'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-16'>
          <label className='font-serif italic  text-2xl font-medium' htmlFor="email">Email ID:</label>
          <input className='input ml-8 rounded-md px-16 py-2'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-16'>
          <label className='font-serif italic  text-2xl font-medium' htmlFor="contactNumber">Contact Number:</label>
          <input className='input ml-8 rounded-md px-16 py-2 md: '
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-16'>
          <label className='font-serif italic  text-2xl font-medium' htmlFor="service">Service:</label>
          <select className='input ml-8 rounded-md px-8 py-2'
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="Home Redesigning">Home Redesigning</option>
            <option value="Interior Detailing">Interior Detailing</option>
            <option value="Furniture Layout">Furniture Layout</option>
            <option value="Exterior Finish Selection">Exterior Finish Selection</option>
            <option value="Colour and Paint Selection">Colour and Paint Selection</option>
          </select>
        </div>

        <button className='bg-black rounded-full px-8 py-4 text-white font-serif italic  text-2xl font-medium' type="submit">Submit</button>
      </form>
        </motion.div>
    </div></>
  )
}

export default Getintouch;