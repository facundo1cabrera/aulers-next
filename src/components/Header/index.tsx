import { FC, useState } from "react";
import { Logo } from "../Logo/";

export const Header: FC = () => {

    return (
        <>
            <header className="h-14 flex justify-center shadow-lg w-full z-50">
                <div className="w-full max-w-5xl flex items-center justify-between">
                    <Logo />
                    <nav className="transition-all ease-in-out">
                        <ul className="flex gap-9 m-0 items-center">
                            <li className="cursor-pointer">
                                <a className="no-underline">Mujer</a>
                            </li>
                            <li className="cursor-pointer">
                                <a className="no-underline">Hombre</a>
                            </li>
                            <li className="cursor-pointer">
                                <div className="py-2 px-4 bg-principal rounded-sm text-white font-semibold">
                                    Registrate
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}