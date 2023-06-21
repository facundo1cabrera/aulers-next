import { FC } from "react";

export const Logo: FC = () => {
    return (
        <div className="relative">
            <h1 className="text-2xl font-medium roboto-slab">Aulers</h1>
            <div className="h-line w-16 bg-principal absolute top-10 left-5"></div>
        </div>
    );
};