import CircularProgressBar from "./CircularProgressBar";
import Reactjs from './Reactjs';
import JAVASCRIPT from './Javascript';
export default function SkillSection(){
    return (
        <div>
        <div className="flex flex-col md:flex-row">
        <div className="p-4  m-2 w-full md:w-1/2">
        <div className="flex flex-row p-4 gap-16">
        <div className="flex-1 bg-amber-200 p-4 items-center animate-bounce rounded-2xl">
        <div className="w-16 h-20">
            <CircularProgressBar/>
        </div>
        <br/>
        <div className="text-2xl font-semibold text-black">REACTJS</div>
    </div>
    <div className="flex-1 bg-amber-200 p-4 items-center animate-bounce rounded-2xl">
    <div className="w-16 h-20">
            <Reactjs/>
        </div>
        <br/>
        <div className="text-2xl font-semibold text-black">NEXTJS</div>
    </div>
    <div className="flex-1 bg-amber-200 p-4 animate-bounce rounded-2xl">
    <div className="w-16 h-20">
            <JAVASCRIPT/>
        </div>
        <br/>
        <div className="text-2xl font-semibold text-black">JS</div>
    </div>
    </div>
    <div className="flex flex-row p-4 gap-16">
    <div className="flex-1 bg-amber-200 p-4 items-center animate-bounce rounded-2xl">
    <div className="w-16 h-20">
            <CircularProgressBar/>
        </div>
        <br/>
        <div className="text-2xl font-semibold text-black">REACTJS</div>
    </div>
    <div className="flex-1 bg-amber-200 p-4 items-center animate-bounce rounded-2xl">
    <div className="w-16 h-20">
            <CircularProgressBar/>
        </div>
        <br/>
        <div className="text-2xl font-semibold text-black">REACTJS</div>
    </div>
    <div className="flex-1 bg-amber-200 p-4 animate-bounce rounded-2xl">
    <div className="w-16 h-20">
            <CircularProgressBar/>
        </div>
        <br/>
        <div className="text-2xl font-semibold text-black">REACTJS</div>
   </div>
    </div>
    </div>
        <div className="p-4 bg-green-200 m-2 w-full md:w-1/2">
            <div className="flex flex-row p-2 text-black font-extrabold text-2xl">
            MY SKILLS
            </div>
            <div className="flex flex-row p-2 text-black font-extrabold text-5xl">
            Crafting Innovative & Engaging Digital Solutions
            </div>
            <div className="flex flex-row p-2 text-black font-bold text-1xl">
            Learning and improving my skills day by day. With a strong foundation in front-end and back-end technologies, I deliver seamless and interactive digital experiences. My focus is on building fast, scalable, and user-friendly solutions that cater to your unique business needs. Explore my expertise, and lets create something remarkable.
            </div>
            <div className="flex flex-row p-2">
                <div className="flex-1  group inline-block">
                <div className="transform transition-transform duration-300 group-hover:-rotate-90">
                👉 Hover over me!
                </div>
                <div className="flex-1 bg-pink p-4 rounded-3xl text-black text-xl animate-bounce">DOWNLOAD CV...</div>
              
</div>

            </div>
        </div>
        </div>
        </div>
        
    )
}