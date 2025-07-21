import { Code } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Service = [
    {
        icon: <Code />,
        title: "Web Development",
        description: "Custom websites and web applications built with modern technologies, focusing on performance, scalability, and responsive design.",
    },
    {
        icon: <Code />,
        title: "UI/UX Design",
        description: "User-centered interface and experience design to ensure your digital products or services are intuitive, engaging, and visually appealing.",
    },
    {
        icon: <Code />,
        title: "Website Maintenance",
        description: "Ongoing support, updates, and optimization to keep your website secure, up-to-date, and running smoothly.",
    },
]

const Services = () => {
    return (
        <>
            <div id='services' className='min-h-screen w-full relative top-[70px] bg-[--SecBg] flex flex-col items-start justify-around p-[25px] lg:p-[50px] gap-[60px] '>
                <div className="flex flex-col items-start justify-center gap-[20px] lg:pr-[200px]">
                    <h1 className='text-[5rem] leading-[5rem] font-bold capitalize'>My <span>Services</span></h1>
                    <p>
                        I offer a range of professional web development services tailored to help you build, launch, and grow your online presence. Whether you need a modern website, a custom web application, or ongoing support and optimization, I provide solutions that combine technical expertise with creative design. My focus is on delivering high-quality, scalable, and user-friendly digital experiences to meet your unique business needs.
                    </p>
                    {/* <Link className='p-[10px] rounded-md bg-transparent font-bold uppercase outline-none border-solid border-[2px] border-[--HText] hover:scale-[1.05] duration-500 transition-all '>Get Quote</Link> */}
                </div>
                <div className="flex flex-col lg:flex-row gap-[25px]">
                    {Service.map((service, index) => (
                    <div key={index} className="flex flex-col items-start justify-around p-[25px] gap-[20px] rounded-lg bg-[--MainBg]">
                        <div className="flex items-center justify-center bg-[--HText] p-[10px] rounded-full">{service.icon}</div>
                        <h2 className='text-[2.5rem] font-bold capitalize'>{service.title}</h2>
                        <p>{service.description}</p>
                        {/* <button className='p-[10px] rounded-md bg-transparent font-bold uppercase outline-none border-solid border-[2px] border-[--HText] hover:scale-[1.05] duration-500 transition-all '>Get Quote</button> */}
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Services