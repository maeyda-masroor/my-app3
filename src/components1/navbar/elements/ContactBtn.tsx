'use client'
import useWindowSize from './WindowSize'; // Adjust path if needed
import { useState } from "react";
import Confetti from 'react-confetti';
const ContactBtn = ({title}:{title:string}) => {
    const { width, height } = useWindowSize();
    const [showConfetti, setShowConfetti] = useState(false);
    const handleClick = () => {
        setShowConfetti(true);
        // Hide confetti after 3 seconds
        setTimeout(() => setShowConfetti(false), 6000);  
    }
    return (
    <div>
    <button className='flex items-center cursor-pointer'>
        <div aria-label={title} className={"transition ease-in-out duration-300 text-center border-2 border-white rounded-3xl px-3 py-1 hover:bg-white hover:text-black"} onClick={handleClick} >{title}</div>
    </button>
    {showConfetti && <Confetti width={width} height={height}/>}
    </div>
    );
}

export default ContactBtn;