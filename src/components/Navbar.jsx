import { CloseRounded, MenuRounded } from '@mui/icons-material'
import { Menu } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from "../utils/ThemeTogggle";

const Sidebar = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <button className='fixed flex flex-col items-center justify-center lg:hidden z-[99] mt-[10px] ml-[20px] text-[--SecText] bg-[--SecBg] backdrop-blur-3xl p-[15px] rounded-full outline-none border-solid border-[2px] border-[--HText] left-0 ' onClick={() => setOpen((prev) => !prev)}>{!open ? <MenuRounded /> : <CloseRounded />}</button>
            {open &&
                <div className='flex flex-col lg:hidden h-screen w-[300px] fixed z-[98] bg-[--SecBg] bg-opacity-75 backdrop-blur-lg p-[50px] pt-[100px] gap-[40px] text-4xl transition-all duration-300 '>
                    <Link to="/" className='hover:text-[--HTextLight] '>Home</Link>
                    <Link to="/#services" className='hover:text-[--HTextLight] '>Services</Link>
                    <Link to="/portfolio" className='hover:text-[--HTextLight] '>Portfolio</Link>
                    <Link to="/contact" className='hover:text-[--HTextLight] '>Contact</Link>
                    <Link to="/get-started" className='text-center bg-[--HText] p-[5px] rounded-lg '>Start</Link>
                    <ThemeToggle />
                </div>
            }
        </>
    )
}

const Navbar = () => {
    return (
        <>
            <Sidebar />
            <div className='hidden w-full h-[70px] bg-[--SecBg] lg:flex items-center justify-between px-[40px] fixed top-0 z-50'>
                <Link className='text-[2rem] font-extrabold '>Fatuous Nerd</Link>
                <div className="flex items-center gap-[25px] ">
                    <Link to="/" className='hover:text-[--HTextLight] '>Home</Link>
                    <Link to="/#services" className='hover:text-[--HTextLight] '>Services</Link>
                    <Link to="/portfolio" className='hover:text-[--HTextLight] '>Portfolio</Link>
                    <Link to="/contact" className='hover:text-[--HTextLight] '>Contact</Link>
                    <Link to="/get-started" className='p-[10px] rounded-md bg-[--HTextLight] font-bold uppercase outline-none hover:scale-[1.05] hover:shadow-md hover:shadow-[--HTextLight] duration-500 transition-all '>Get Started</Link>
                    <ThemeToggle />
                </div>
            </div>
        </>
    )
}

export default Navbar