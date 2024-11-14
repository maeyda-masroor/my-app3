"use client"
import React from 'react';
import Confetti from 'react-confetti';
import { useState } from 'react';
import useWindowSize from '../components1/navbar/elements/WindowSize';
interface WhatsappButtonProps {
  phoneNumber: string;
  message: string;
}

const WhatsappButton: React.FC<WhatsappButtonProps> = ({ phoneNumber, message }) => {
  const encodedMessage = encodeURIComponent(message); // Ensure spaces and special characters are encoded properly
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const handleClick = () => {
    setShowConfetti(true);
    // Hide confetti after 3 seconds
    setTimeout(() => setShowConfetti(false), 6000);  
}
  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <button onClick={handleClick}>Contactus</button>
      {showConfetti && <Confetti width={width} height={height}/>}
    </a>
  );
};

export default WhatsappButton;