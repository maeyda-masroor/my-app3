import ContactBtn from "../components1/navbar/elements/ContactBtn";
import web from '../../public/web.png';
import Image from "next/image";
const ServieData = [
    {
        desc:'https://img.icons8.com/?size=100&id=16713&format=png&color=000000',
        img_src:web,
        job_title:'web develoer',
    },
    {
        desc:'https://img.icons8.com/?size=100&id=16713&format=png&color=000000',
        img_src:web,
        job_title:'grahpic designer'
    },
    {
        desc:'https://img.icons8.com/?size=100&id=16713&format=png&color=000000',
        img_src:web,
        job_title:'web develoer',
    },
    {
        desc:'https://img.icons8.com/?size=100&id=16713&format=png&color=000000',
        img_src:web,
        job_title:'grahpic designer'
    },
    {
        desc:'https://img.icons8.com/?size=100&id=16713&format=png&color=000000',
        img_src:web,
        job_title:'web develoer',
    },
    {
        desc:'https://img.icons8.com/?size=100&id=16713&format=png&color=000000',
        img_src:web,
        job_title:'grahpic designer'
    }

  ]
function Services() {
    return <div>
    <div id="Services" className="p-10 flex text-white min-h-full flex-col items-center bg-pink">
    <div className="text-black font-extrabold text-5xl">FEATURES</div>
          <div className="m-2 text-black justify-center text-7xl">WHAT I DO..</div>
        <div className="group flex desktop:flex-row mobile:flex-col mobile:items-center flex-grow justify-around text-center  m-10">
        {ServieData.map((social, index) => (
        <div className="flex min-h-full flex-col desktop:w-1/3 m-4 mobile:w-3/4 p-8 rounded-md transition-colors bg-orange hover:bg-green" key={index}>
            <button className="invisible group-hover:visible 
            absolute pr-10 pl-10 pt-2 pb-2 mt-24 
            ml-4 text-white  bg-orange animate-bounce">
                {social.desc}
            </button>
            <Image className="animate-bounce" src={social.img_src} alt="web" width={100} height={100} />
            <h1 className="text-3xl font-semibold animate-bounce">{social.job_title}</h1>  
            <div className="visible hover:invisible animate-bounce">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
            </svg>
            </div>
            </div>
             ))}
        </div>
        </div>
        <p className="desktop:text-[40px] mobile:text-[24px] font-bold text-center mb-4">You have a project? Get in Touch</p>
        <ContactBtn/>     
    </div>
}

export default Services;