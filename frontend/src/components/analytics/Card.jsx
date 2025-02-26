import React, { useState, useEffect } from 'react';

const Card = ({ title, data }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const targetNumber = Math.abs(parseInt(data));
    const duration = 1500; 
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = targetNumber / steps;
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep += 1;
      
      if (currentStep === steps) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(increment * currentStep));
      }
    }, stepDuration);
    
    return () => clearInterval(timer);
  }, [data]);
  
  return (
      <div className="w-[75%] h-40 bg-white rounded-xl p-4 m-2 mx-16 shadow-lg transition-transform hover:scale-105 duration-300">
        <h3 className="text-xl font-semibold mb-6">{title}</h3>
        <p className="text-center mb-8 mt-2 text-4xl font-bold text-green-400">
          {count}+
        </p>
      </div>
  );
};

export default Card;