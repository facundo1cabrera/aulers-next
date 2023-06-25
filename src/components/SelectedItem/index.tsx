import { FC } from "react";

export const SelectedItem: FC = () => {
    // We should receive the id of the selected item and fetch the backend to get the:
    // images, in how many carts is, since when is in aulers, price and that stuff

    return (
        <>
            <div className="max-w-2xl m-auto columns-2 gap-x-5 pt-10 h-selected-item mb-10">
                <div className="w-full h-full">
                    <img src="image1.jpg" className="object-contain w-full h-full"/>
                </div>
                <div className="w-full flex flex-col h-full">
                    <h1 className="text-xl">Remera tortuga verde mar</h1>
                    <div className="flex justify-between pt-2">
                        <p className="text-gray-400 text-sm">Hollister</p>
                        <p className="text-gray-600 text-base">18.000$</p>
                    </div>
                    <div className="w-full h-small-line bg-principal mb-5"></div>
                    <p className="text-sm text-gray-400 font-light">En aulers hace 1 mes. En el carrito de 5 personas.</p>
                    <div className="w-full h-full"></div>
                    <div className="w-full flex py-2 mb-1">
                        <a className="m-auto font-light cursor-pointer">Agregar al carrito</a>
                    </div>
                    <div className="w-full flex bg-principal rounded-sm cursor-pointer">
                        <a className="m-auto py-2 font-medium text-white">Comprar</a>
                    </div>
                </div>
            </div>
        </>
    );
};