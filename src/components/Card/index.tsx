import React, { FC, useState } from 'react';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

type Card = FC;

export const Card: Card = () => {
    const amountOfImages = 1;

    const [showImage, setShowImage] = useState(0);

    const hideImage = (n: number) => {
        return "";
        return (n === showImage) ? "translate-x-0" : "translate-x-full";
    }

    console.log("render");

    const handleSlide = (n: number) => {
        // if(showImage === amountOfImages && n === 1){
        //     setShowImage(0);
        //     console.log("entre")
        // }
        // if(n == -1 &&) {
        //     setShowImage(amountOfImages);
        // } else {
        //     setShowImage(showImage + n);
        // }
        let activeSlide = document.querySelector('.slide.translate-x-0');
        activeSlide?.classList.remove('translate-x-0');
        activeSlide?.classList.add('-translate-x-full');
        
        let nextSlide = activeSlide?.nextElementSibling;
        nextSlide?.classList.remove('translate-x-full');
        nextSlide?.classList.add('translate-x-0');
    }

    return (
        <div className='w-full lg:w-2/4 flex justify-center items-center py-10 relative ease-out delay-200'>
            <AiOutlineLeft size={25} className="cursor-pointer" onClick={(e) => handleSlide(-1)}/>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-start">
                    <p className="text-xl opacity-90 mb-3">Sobrecamisa de pana Oversized Fit</p>
                    <p className="text-base opacity-80">$12.302</p>
                </div>
                <div className="w-full flex overflow-hidden relative">
                    <div className="h-image"></div>
                    <img className={`w-full inset-0 object-contain absolute slide translate-x-0 transition-all ease-in-out duration-1000 transform ${hideImage(0)} `} src="/img/example1.png" />
                    <img className={`w-full inset-0 object-contain absolute slide translate-x-full transition-all ease-in-out duration-1000 transform ${hideImage(1)} `} src="/img/example2.png" />
                </div>
            </div>
            <AiOutlineRight size={25} className="cursor-pointer" onClick={(e) => handleSlide(1)}/>
        </div>
    );
}
