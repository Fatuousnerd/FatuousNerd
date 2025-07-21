import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { AutoMode } from '@mui/icons-material'
import Footer from '../components/Footer';

const Card = [
    {
        id: 1,
        lnk: "https://masiki.site",
        image: "./Masiki.png",
        category: "Non-Profit Org",
        domn: "masiki.site",
        project: "Masiki Org",
    },
    {
        id: 2,
        lnk: "https://storova.store",
        image: "./Storova.png",
        category: "E-Commerce Store",
        domn: "storova.store",
        project: "Storova Store",
    },
    {
        id: 3,
        lnk: "https://sirajcharity.netlify.app",
        image: "./Siraj.png",
        category: "Non-Profit Org",
        domn: "sirajcharity.netlify.app",
        project: "Siraj Charity",
    },
    {
        id: 4,
        lnk: "https://areteco.agency",
        image: "./Arete.png",
        category: "Funnel Agency",
        domn: "areteco.agency",
        project: "Arete Co",
    },
    // {
    //     id: 5,
    //     lnk: "https://sirajcharity.netlify.app",
    //     image: "./Siraj.png",
    //     category: "Non-Profit Org",
    //     domn: "sirajcharity.netlify.app",
    //     project: "Siraj Charity",
    // },
];

const Portfolio = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-screen w-full relative top-[70px] flex items-start justify-normal flex-wrap gap-[25px] gap-y-[50px] p-[25px] lg:p-[50px] '>
                {Card.map((item) => (
                    <Link key={item.id} to={item.lnk} className="flex flex-col bg-[--SecBg] rounded-lg w-[375px] lg:h-[325px] border-solid border-[2px] border-[--MainText] overflow-hidden">
                        <img src={item.image} alt="" className='w-full object-cover flex-1 ' />
                        <div className="flex flex-col px-[25px] flex-1 mt-[15px] justify-between">
                            <div className="flex w-full items-center justify-between">
                                <p className='text-[--SecText]'>{item.category}</p>
                                <p className='text-[--SecText] hover:underline'>{item.domn}</p>
                            </div>
                            <h1 className='text-[2.5rem] lg:text-[3rem] font-bold text-[--HText] '>{item.project}</h1>
                        </div>
                    </Link>
                ))}
                <div className="flex flex-col items-center justify-center bg-[--SecBg] rounded-lg w-[375px] h-[325px] border-solid border-[2px] border-[--MainText] overflow-hidden cursor-pointer">
                    <AutoMode style={{ fontSize: "10rem" }} />
                    <h1 className='text-[3rem] font-bold '>Coming Soon</h1>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Portfolio