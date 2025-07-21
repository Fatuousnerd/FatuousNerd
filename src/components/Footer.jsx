import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='relative top-[70px] w-full h-[650px] lg:h-[550px] p-[25px] lg:p-[50px] flex items-center justify-center '>
                <div className="flex flex-col rounded-lg bg-[--SecBg] w-[95%] h-[95%] p-[25px] lg:pr-[500px] items-start justify-around ">
                    <h1 className='text-[3.5rem] capitalize font-bold leading-[3.5rem]'>
                        Ready to elevate your design?
                    </h1>
                    <p className='text-[1rem] leading-[1.5rem] text-[--SecText] mt-2'>
                        Join us today and elevate your online presence. Whether you’re a business owner, creative professional, or just starting out, I'm here to help you stand out from the crowd.
                    </p>
                    <Link to="/contact" className='p-[10px] rounded-md bg-[--HTextLight] font-bold uppercase outline-none hover:scale-[1.05] duration-500 transition-all mt-4'>
                        Get Started
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Footer