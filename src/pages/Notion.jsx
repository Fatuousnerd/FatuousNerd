import React from 'react'
import Navbar from '../components/Navbar'

const Notion = () => {
    return (
        <>
            <Navbar />
            <div className='h-screen w-full relative flex items-center justify-center '>
                <div className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[50px] h-[50px] border-[2.5px] rounded-full border-b-transparent animate-spin duration-50 z-[15] "></div>
                <iframe src="https://sordid-quiver-30f.notion.site/ebd/23c3cadba74480749bb3c6375b7c517e" frameborder="0" allowfullscreen className='w-full h-screen relative top-[70px] z-[20] ' />
            </div>
        </>
    )
}

export default Notion