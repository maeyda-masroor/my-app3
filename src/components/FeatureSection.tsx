import Image from "next/image"
import web from '../../public/web.png';
export default function Hero_Section(){
    return (
    <div className="w-full px-20 pt-10 bg-pink">
    <div className="grid place-items-center m-10">
          <div className="text-black font-extrabold text-5xl">FEATURES</div>
          <div className="m-2 text-black justify-center text-7xl">WHAT I DO..</div>
    </div>
    <div className="flex flex-row p-10 gap-10">
    <div className="group flex-1 bg-green p-4 hover:border-zinc-950 border-2 rounded-lg">
        <div className="w-20 h-20">
        <button className="invisible group-hover:visible 
            absolute pr-10 pl-10 pt-2 pb-2 mt-24 
            ml-4 text-white  bg-orange animate-bounce">
            BUILD RESPONSIVE , DYNAMIC WEBSITES USING MODERN TECHNOLOGIES
        </button>
        <Image className="animate-bounce" src={web} alt="web" width={100} height={100} />
        </div>
        <h1 className="text-3xl font-semibold animate-bounce">WEB DEVELOPER</h1>  
        <div className="visible hover:invisible animate-bounce">
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
        </svg>
        </div>
    </div>
    <div className="group flex-1 bg-green p-4 hover:border-zinc-950 border-2 rounded-lg">
        <div className="w-20 h-20">
        <button className="invisible group-hover:visible 
            absolute pr-10 pl-10 pt-2 pb-2 mt-24 
            ml-4 text-white  bg-orange animate-bounce">
            CREATE RESPONSIVE WEBSITES
        </button>
        <Image className="animate-bounce" src={web} alt="web" width={100} height={100} />
        </div>
        <h1 className="text-3xl font-semibold animate-bounce">FRONT END DEVELOPMENT</h1>  
        <div className="visible hover:invisible animate-bounce">
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
        </svg>
        </div>
    </div>
    <div className="group flex-1 bg-green p-4 hover:border-zinc-950 border-2 rounded-lg">
        <div className="w-20 h-20">
        <button className="invisible group-hover:visible 
            absolute pr-10 pl-10 pt-2 pb-2 mt-24 
            ml-4 text-white  bg-orange animate-bounce">
                SERVER SIDE WORKING .. 
        </button>
        <Image className="animate-bounce" src={web} alt="web" width={100} height={100} />
        </div>
        <h1 className="text-3xl font-semibold animate-bounce">BACKEND DEVELOPMENT</h1>  
        <div className="visible hover:invisible animate-bounce">
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
        </svg>
        </div>
    </div>
    
    </div>
    <div className="flex flex-row p-10 gap-10">
    <div className="group flex-1 bg-green p-4 hover:border-zinc-950 border-2 rounded-lg">
        <div className="w-20 h-20">
        <button className="invisible group-hover:visible 
            absolute pr-10 pl-10 pt-2 pb-2 mt-24 
            ml-4 text-white  bg-orange animate-bounce">
         END TO END WORKING
         </button>
        <Image className="animate-bounce" src={web} alt="web" width={100} height={100} />
        </div>
        <h1 className="text-3xl font-semibold animate-bounce">FULL STACK DEVELOPMEMT</h1>  
        <div className="visible hover:invisible animate-bounce">
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
        </svg>
        </div>
    </div>
    <div className="group flex-1 bg-green p-4 hover:border-zinc-950 border-2 rounded-lg">
        <div className="w-20 h-20">
        <button className="invisible group-hover:visible 
            absolute pr-10 pl-10 pt-2 pb-2 mt-24 
            ml-4 text-white  bg-orange animate-bounce">
                UI UX DESIGNING FIGMA
        </button>
        <Image className="animate-bounce" src={web} alt="web" width={100} height={100} />
        </div>
        <h1 className="text-3xl font-semibold animate-bounce">GRAPHIC DESIGNER</h1>  
        <div className="visible hover:invisible animate-bounce">
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
        </svg>
        </div>
    </div>
    <div className="group flex-1 bg-green p-4 hover:border-zinc-950 border-2 rounded-lg">
        <div className="w-20 h-20">
        <button className="invisible group-hover:visible 
            absolute pr-10 pl-10 pt-2 pb-2 mt-24 
            ml-4 text-white  bg-orange animate-bounce">
                GRAPHIC DESIGNING IN CANVA
        </button>
        <Image className="animate-bounce" src={web} alt="web" width={100} height={100} />
        </div>
        <h1 className="text-3xl font-semibold animate-bounce">GRAPHIC DESIGNING</h1>  
        <div className="visible hover:invisible animate-bounce">
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
        </svg>
        </div>
    </div>
    
    </div>
    
    </div>

    )
}