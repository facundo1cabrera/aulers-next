import React, { FC, useEffect, useRef, useState } from 'react';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { AddToCartModal } from '../AddToCartModal';

type Card = FC;

export const Card: Card = () => {

    const ref = useRef<HTMLDivElement>(null);

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const checkIfClickedOutside = (e: any) => {
            if (showModal && ref.current && !ref.current.contains(e.target)) {
                setShowModal(false);
            }
        }
        
        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        }
    }, [showModal]);

    return (
        <div className={`w-full lg:w-2/4 flex flex-col justify-center items-center py-10 relative ease-out delay-20`}>
            {
                (showModal) ? (
                    <div ref={ref}>
                        <AddToCartModal setShowModal={setShowModal}/>
                    </div>
                )
                    : null
            }
            <div className="flex flex-col justify-center items-start mb-2 relative">
                <p className="text-xl opacity-90 mb-3">Sobrecamisa de pana Oversized Fit</p>
                <p className="text-base opacity-80">$12.302</p>
                <FiMoreHorizontal size={30} className="absolute bottom-0 right-0 z-10 cursor-pointer" onClick={() => setShowModal(true)} />
            </div>
            <CarouselProvider
                naturalSlideWidth={200}
                naturalSlideHeight={468}
                totalSlides={2}
                className="h-image w-full flex justify-center items-center relative"
            >
                <ButtonBack className="">
                    <AiOutlineLeft />
                </ButtonBack>
                <Slider className="h-image w-2/4 relative cursor-pointer">
                    <Slide index={0} className="h-full flex">
                        <img className="h-image object-contain m-auto" src="/img/example1.png"/>
                    </Slide>
                    <Slide index={1} className="h-full flex">
                        <img className="h-image object-contain m-auto" src="/img/example2.png"/>
                    </Slide>
                </Slider>
                <ButtonNext className="">
                    <AiOutlineRight />
                </ButtonNext>
            </CarouselProvider>
        </div>
    );
}
