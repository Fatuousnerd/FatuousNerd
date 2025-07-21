import React from 'react'
import Navbar from '../components/Navbar'
import { Instagram, Mail, Phone, WhatsApp } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className='h-screen w-full relative top-[70px] flex flex-col lg:flex-row items-center justify-center p-[25px] lg:p-[50px] pt-[200px] lg:pt-[50px] gap-[50px] '>
                <div className="flex flex-col flex-1 gap-[30px]">
                    <h1 className='text-[4rem] lg:text-[5rem] font-bold leading-[5rem] '>Contact me</h1>
                    <div className="flex flex-col items-start justify-around bg-[--SecBg] p-[25px] rounded-lg gap-[25px] ">
                        <Link className="flex items-center justify-center gap-[25px] hover:underline"><Mail/> calvinkmwaura@gmail.com</Link>
                        <Link className="flex items-center justify-center gap-[25px] hover:underline"><Phone/> +254 745 610 061</Link>
                        <Link className="flex items-center justify-center gap-[25px] hover:underline"><WhatsApp/> +254 745 610 061</Link>
                        <Link className="flex items-center justify-center gap-[25px] hover:underline"><Instagram/> fatuousnerd</Link>
                        {/* <Link className="flex items-center justify-center gap-[25px] hover:underline"><Mail/> calvinkmwaura@gmail.com</Link> */}
                        {/* <Link className="flex items-center justify-center gap-[25px] hover:underline"><Mail/> calvinkmwaura@gmail.com</Link> */}
                    </div>
                </div>
                <div className="flex-1 flex w-full">
                    <form action="" className=' w-full h-full p-[25px] flex flex-col items-start gap-[25px] '>
                        <div className="flex flex-col w-full">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" placeholder='John Doe' id="" className='p-[5px] bg-transparent border-b-solid border-b-[2px] border-b-[--MainText] outline-none focus:bg-[rgba(255,255,255,.15)] duration-300 transition-all '/>
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="num">Phone No.</label>
                            <input type="tel" name="num" placeholder='+254 123 456 789' id="" className='p-[5px] bg-transparent border-b-solid border-b-[2px] border-b-[--MainText] outline-none focus:bg-[rgba(255,255,255,.15)] duration-300 transition-all '/>
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="mail">Email</label>
                            <input type="email" name="mail" placeholder='email@example.com' id="" className='p-[5px] bg-transparent border-b-solid border-b-[2px] border-b-[--MainText] outline-none focus:bg-[rgba(255,255,255,.15)] duration-300 transition-all '/>
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" rows={5} placeholder="What's on your mind...??" id="" className='p-[5px] bg-transparent border-b-solid border-b-[2px] border-b-[--MainText] outline-none focus:bg-[rgba(255,255,255,.15)] duration-300 transition-all '/>
                        </div>
                        <button className='border-solid border-[2px] border-[--MainText] p-[10px] rounded-md font-bold hover:bg-[--MainText] hover:text-[--MainBg] focus:bg-[--MainText] focus:text-[--MainBg] duration-300 transition-all '>Send Message</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact