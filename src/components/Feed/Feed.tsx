import Image from "next/image";
import { FC } from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';

export const Feed: FC = () => {

    return (
        <>
            <main className="w-full h-screen flex gap-9 px-28 pt-24">
                <div className="w-2/4">
                    <div className="pb-12">
                        <h1 className="playfair text-3xl font-medium">Comprá ropa como nunca habias hecho</h1>
                        <p className="text-base text-gray-700 pt-6">
                            Viví una experiencia unica comprando ropa en linea. Consegui prendas unicas al mejor precio.
                        </p>
                    </div>
                    <div className="flex h-12">
                        <div className="w-60 h-full rounded-md cursor-pointer hover:bg-secondary-h bg-secondary flex justify-center items-center ease-in-out transition-all hover:font-bold font-medium">
                            <a className="text-base">Registrate</a>
                        </div>
                        <div className="h-full flex justify-start px-14 cursor-pointer items-center gap-2 hover:gap-3 hover:font-medium">
                            <a className="">Inicia sesión</a>
                            <AiOutlineArrowRight />
                        </div>
                    </div>
                </div>
                <div className="w-2/4 h-full pb-11 flex">
                    <div className="h-full px-3">
                        <img src="/image1.jpg" alt="image" className="h-full rounded-sm w-52 bg-cover" />
                    </div>
                    <div className="">
                        <div className="w-full">
                            <img src="/image2.jpg" alt="image2" className="h-2/4 rounded-sm w-52 bg-cover" />
                        </div>
                        <div className="h-3"></div>
                        <div className="w-full">
                            <img src="/image3.jpg" alt="image3" className="h-2/4 rounded-sm w-52 bg-cover" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}