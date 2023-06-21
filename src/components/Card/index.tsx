import { FC, useState } from "react";

interface Props {
    imageUrl: string;
}

export const Card: FC<Props> = ({ imageUrl }: Props) => {
    return (
        <>
            <div className="overflow-hidden rounded-md mb-3 cursor-pointer relative hover:bg-black">
                <img src={imageUrl} className="w-full hover:scale-110 hover:opacity-70" />
            </div>
        </>
    );
}