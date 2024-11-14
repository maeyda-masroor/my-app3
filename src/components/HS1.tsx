
import Image from "next/image";
import Logo from '../../public/logo.jpeg';
import LogoSlider from "./LogoSlider";
import styles from './WavingHand.module.css';
function HS1() {
    return <div className="bg-white" id="About">
        <div className="flex justify-center items-center text-white">
            <div className="flex flex-row w-full">
                <div className="flex desktop:w-1/2 mobile:w-full mobile:p-4 flex-col desktop:p-20">
                <div className={styles.text}>HI THERE!<span className={styles.wave}>👋</span></div>
                <div className="text-3xl font-bold text-black">I am MAAEYDAH MASROOR</div>
                <div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-green-600/60 to-50% to-green-600">I AM A 
                <span className="text-orange inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                <ul className="block animate-text-slide-5 text-left leading-tight [&_li]:block">
                <li>FULL STACK DEVELOPER</li>
                <li>UI UX DESIGNER</li>
                <li>GRAPHIC DESIGNER</li>
                <li>WEB DESIGNER</li>
                <li>BOOK WRITER</li>
                <li aria-hidden="true">AN ARTIST ALSO</li>
                </ul>
                </span></div>
                <div className="text-lg text-black">
                NICE TO MEET YOU
                </div>
                 </div>
                <div className="desktop:flex mobile:hidden w-1/2 flex-col pl-10">
                <div className="pt-4 px-28  m-2">
                <Image className="rounded-md" src={Logo} alt="c" width={300} height={300}/>  
                </div>
                <div className="px-10  m-2 h-50">
                <LogoSlider/>
                </div>
      
                </div>
            </div>
        </div>
    </div>
}

export default HS1;