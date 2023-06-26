import { FC } from "react";
import { Card } from "../Card";

export const Gallery: FC = () => {

    // fetch images from the api
    var images = ["image1.jpg", "image2.jpg", "image3.jpg", "set2.jpg", "set4.jpg"]

    return (
        <>
            <div className="max-w-7xl m-auto">
                <div className="flex flex-col pt-8">
                    <h1 className="pb-1 text-2xl">Explorá</h1>
                    <div className="h-small-line w-full bg-gray-400"></div>
                </div>
                <div className="w-full columns-1 sm:columns-2 md:columns-4 gap-x-3 box-border pt-10">
                    {
                        images.map(image => (
                            <>
                                <Card imageUrl={image} />
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    );
};