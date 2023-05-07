import { FC } from "react";

export const Header: FC = () => {

    return (
        <>
            <header className="h-14 border-b-black border-b flex px-28">
                <div className="w-full flex items-center justify-between">
                    <h1 className="text-2xl font-medium">Aulers</h1>
                    <nav className="">
                        <ul className="flex gap-9 m-0">
                            <li>
                                <a className="no-underline relative before:absolute before:border-b-gray-400 before:w-1/3 before:border-b-2 before:-bottom-2">EXPLORÁ</a>
                            </li>
                            <li>
                                <a className="no-underline relative">TALLES</a>
                            </li>
                            <li>
                                <a className="no-underline relative">MUJER</a>
                            </li>
                            <li>
                                <a className="no-underline relative">HOMBRE</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}