import { FC } from "react";
import { BiShoppingBag } from 'react-icons/bi'

type Header = FC;

export const Header = () => {
    return (
        <header className="w-full h-16 border-b-2 border-neutral-200">
            <div className="flex h-full w-11/12 justify-between m-auto items-center text-black">
                <h1 className="font-semibold text-2xl hover:cursor-pointer">Aulers</h1>
                <div className="flex font-light text-base justify-between w-44">
                    <h2>Hombre</h2>
                    <h3>Mujer</h3>
                </div>
                <div className="flex justify-between w-40">
                    <button className="rounded-md border border-neutral-200 py-1 px-4 hover:bg-green transition-all duration-500">
                    Registrate
                    </button>
                    <BiShoppingBag size={30} className="hover:cursor-pointer"/>
                </div>
            </div>
        </header>
    );
}