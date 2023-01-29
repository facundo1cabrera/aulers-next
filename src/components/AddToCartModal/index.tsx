import { Dispatch, FC, SetStateAction, useRef } from 'react';
type AddToCartModal = FC;

export const AddToCartModal = ({setShowModal}: {setShowModal: Dispatch<SetStateAction<boolean>>}) => {    
    return (
        <div className={`absolute z-50 top-32 right-1/4 animate-modal-popup border shadow-sm bg-white`}>
            <div className="absolute right-2 cursor-pointer top-0" onClick={() => setShowModal(false)}>X</div>
            <div className="flex flex-col justify-start items-start text-black p-4">
                <p className="text-xl font-medium">¿Te interesa?</p>
                <p className="w-56 font-light opacity-70 pt-2 pb-4 leading-5">
                    ¡No dejes que te la quiten! Ya ha sido marcada como favorita por 3 personas
                </p>
                <div className="flex justify-between w-full">
                    <p className="p-2 border border-gray-200 rou nded-sm text-center cursor-pointer">Añadir al carrito</p>
                    <div className="w-4"></div>
                    <a className="py-2 px-4 cursor-pointer bg-dark-purple text-white rounded-sm text-center" >
                        Comprar ahora
                    </a>
                </div>
            </div>
        </div>
    )
}