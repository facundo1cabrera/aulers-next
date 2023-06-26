import { Header } from '@/components/Header'

export default function CartPage() {


    return (
        <>
            <div className="min-h-screen">
                <Header />
                <div className="flex flex-col md:flex-row w-full h-full">
                    <div className="h-full w-full md:w-2/3 px-2 sm:pl-7 lg:pl-24 py-20 sm:pr-12">
                        <div className="w-full h-full">
                            <h1 className="text-3xl text-center sm:text-left pb-10">Comprá</h1>
                            <div className="bg-secondary w-full shadow-lg rounded-sm p-10 mb-20">
                                <span className="text-xl">Método de pago</span>
                                <div className="h-small-line bg-gray-400 w-full mt-2 mb-20"></div>
                                <div className="flex">
                                    <div className='flex flex-col w-2/4 items-start'>
                                        <div className="h-6 w-full rounded-sm pb-6 relative mb-16">
                                            <input type="number" placeholder="Numero de la tarjeta" className="border-b-2 bg-secondary border-gray-400 outline-none w-full 
                                        hover:placeholder:text-principal hover:border-principal focus:border-principal focus:placeholder:text-principal"/>
                                        </div>
                                        <div className="h-6 w-full rounded-sm pb-6 relative mb-16">
                                            <input type="text" placeholder="Nombre y apellido" className="border-b-2 bg-secondary border-gray-400 outline-none w-full 
                                        hover:placeholder:text-principal hover:border-principal focus:border-principal focus:placeholder:text-principal"/>
                                        </div>
                                        <div className="flex gap-12 w-full">
                                            <div className="h-6 w-full rounded-sm pb-6 relative mb-16">
                                                <input type="number" placeholder="Codigo de seguridad" className="border-b-2 bg-secondary border-gray-400 outline-none w-full 
                                            hover:placeholder:text-principal hover:border-principal focus:border-principal focus:placeholder:text-principal"/>
                                            </div>
                                            <div className="h-6 w-full rounded-sm pb-6 relative mb-16">
                                                <input type="text" placeholder="Fecha de expiración" className="border-b-2 bg-secondary border-gray-400 outline-none w-full 
                                            hover:placeholder:text-principal hover:border-principal focus:border-principal focus:placeholder:text-principal"/>
                                            </div>
                                        </div>
                                        <div className="h-6 w-full rounded-sm pb-6 relative mb-16">
                                            <input type="number" placeholder="DNI del titular" className="border-b-2 bg-secondary border-gray-400 outline-none w-full 
                                        hover:placeholder:text-principal hover:border-principal focus:border-principal focus:placeholder:text-principal"/>
                                        </div>
                                        <button className="text-white text-xl rounded-sm shadow-lg font-medium bg-principal px-8 py-2">Guardar</button>
                                    </div>
                                    <div>
                                        CARD
                                    </div>
                                </div>
                            </div>
                            <div className="bg-secondary w-full shadow-lg rounded-sm p-10">
                                <span className="text-xl">Información de entrega</span>
                                <div className="h-small-line bg-gray-400 w-full mt-3 mb-6"></div>
                                <span className="text-base">Completá el siguiente formulario para que podamos enviar tu pedido</span>
                                <div className="flex pt-12">
                                    <div className='flex flex-col w-full items-start'>

                                        <div className="columns-1 sm:columns-2 gap-12 w-full mb-16">
                                            <div className="h-6 w-full rounded-sm pb-6 relative">
                                                <input type="text" placeholder="Nombre y apellido" className="border-b-2 bg-secondary border-gray-400 outline-none w-full 
                                            hover:placeholder:text-principal hover:border-principal focus:border-principal focus:placeholder:text-principal"/>
                                            </div>
                                        </div>

                                        <div className="columns-1 sm:columns-2 gap-12 w-full mb-16">
                                            <div className="h-6 w-full rounded-sm pb-6 relative">
                                                <input type="text" placeholder="Calle" className="border-b-2 bg-secondary border-gray-400 outline-none w-full 
                                            hover:placeholder:text-principal hover:border-principal focus:border-principal focus:placeholder:text-principal"/>
                                            </div>
                                            <div className="h-6 w-full rounded-sm pb-6 relative">
                                                <input type="text" placeholder="Número" className="border-b-2 bg-secondary border-gray-400 outline-none w-full 
                                            hover:placeholder:text-principal hover:border-principal focus:border-principal focus:placeholder:text-principal"/>
                                            </div>
                                        </div>
                                        
                                        <div className="columns-1 sm:columns-2 gap-12 w-full mb-16">
                                            <div className="h-6 w-full rounded-sm pb-6 relative">
                                                <input type="text" placeholder="Localidad" className="border-b-2 bg-secondary border-gray-400 outline-none w-full 
                                            hover:placeholder:text-principal hover:border-principal focus:border-principal focus:placeholder:text-principal"/>
                                            </div>
                                            <div className="h-6 w-full rounded-sm pb-6 relative">
                                                <input type="text" placeholder="Provincia" className="border-b-2 bg-secondary border-gray-400 outline-none w-full 
                                            hover:placeholder:text-principal hover:border-principal focus:border-principal focus:placeholder:text-principal"/>
                                            </div>
                                        </div>

                                        <div className="columns-1 sm:columns-2 gap-12 w-full mb-16">
                                            <div className="h-6 w-full rounded-sm pb-6 relative">
                                                <input type="text" placeholder="Piso/Departamente (opcional)" className="border-b-2 bg-secondary border-gray-400 outline-none w-full 
                                            hover:placeholder:text-principal hover:border-principal focus:border-principal focus:placeholder:text-principal"/>
                                            </div>
                                        </div>

                                        <div className="columns-1 sm:columns-2 gap-12 w-full mb-16">
                                            <div className="h-6 w-full rounded-sm pb-6 relative">
                                                <input type="text" placeholder="Notas adicionales (opcional)" className="border-b-2 bg-secondary border-gray-400 outline-none w-full 
                                            hover:placeholder:text-principal hover:border-principal focus:border-principal focus:placeholder:text-principal"/>
                                            </div>
                                            <div className="h-6 w-full rounded-sm pb-6 relative">
                                                <input type="text" placeholder="Teléfono de contacto" className="border-b-2 bg-secondary border-gray-400 outline-none w-full 
                                            hover:placeholder:text-principal hover:border-principal focus:border-principal focus:placeholder:text-principal"/>
                                            </div>
                                        </div>

                                        <button className="text-white text-xl rounded-sm shadow-lg font-medium bg-principal px-8 py-2">Guardar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-secondary -z-30 w-full md:w-1/3 h-92vh flex items-start justify-center box-border">
                        <div className="px-4 sm:px-16 flex flex-col justify-between py-7 h-full w-full">
                            <div className="">
                                <h1 className="text-2xl">Resumen</h1>
                                <div className="h-small-line w-full bg-principal"></div>
                                <div className="flex justify-between mt-5">
                                    <p className="text-base">Remera adidas rosé:</p>
                                    <p className="text-base">18.000$</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-base">Remera adidas blue:</p>
                                    <p className="text-base">18.000$</p>
                                </div>
                            </div>
                            
                            <div className="">
                                <div className="flex justify-between mb-3">
                                    <p className="text-base">Subtotal:</p>
                                    <p className="text-base">36.000$</p>
                                </div>
                                <div className="h-small-line w-full bg-principal"></div>
                                <div className="flex justify-between my-3">
                                    <p className="text-xl font-medium">Total:</p>
                                    <p className="text-xl font-medium">36.000$</p>
                                </div>
                                <button className="w-full py-3 bg-principal text-white text-center font-semibold rounded-sm text-2xl">Iniciar pago</button>
                            </div>
                        </div>
                        
                            
                    </div>
                </div>
            </div>
        </>
    )
}