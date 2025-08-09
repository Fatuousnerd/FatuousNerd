import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className='h-screen w-full relative flex flex-col items-center justify-center top-[70px] p-[25px] lg:p-[50px] gap-[60px] '>
        <h1 className='text-[3rem] text-left lg:text-[5.75rem] font-extrabold leading-[4rem] lg:leading-[5.75rem] lg:text-center '>Hi, I'm <span>Fatuous Nerd</span>, <br /> a <span className='text-[--HText]'>Full-Stack Developer</span>.</h1>
        <div className="flex items-center justify-center gap-[25px]">
          <Link to="/get-started" className='p-[10px] rounded-md bg-[--HTextLight] font-bold uppercase outline-none hover:scale-[1.05] hover:shadow-md hover:shadow-[--HText] duration-500 transition-all  '>Work with me</Link>
          <Link to="/portfolio" className='p-[10px] rounded-md bg-transparent font-bold uppercase outline-none border-solid border-[2px] border-[--HText] hover:scale-[1.05] hover:bg-[--HText] duration-500 transition-all '>View Portfolio</Link>
        </div>
      </div>
    </>
  )
}

export default Hero