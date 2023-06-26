import { Header } from '@/components/Header'

export default function CartPage() {


    return (
        <>
            <div className="min-h-screen">
                <Header />
                <div className="flex flex-col sm:flex-row w-full h-full">
                    <div className="h-full w-full md:w-2/3 px-2 sm:pl-7 lg:pl-24 py-20 sm:pr-12">
                        <div className="w-full h-full">
                            <h1 className="text-3xl text-center sm:text-left">Prendas seleccionadas</h1>
                            <div className="h-small-line w-full mt-2 bg-slate-300"></div>
                            <div className="w-full">
                                <div className="pl-4 pt-5 w-full min-h-fit sm:h-32 flex justify-between">
                                    <div className="flex">
                                        <div className="h-28 w-32 hidden sm:block bg-red-300"></div>
                                        <div className="flex flex-col justify-between mr-2 sm:ml-4">
                                            <div>
                                                <p className="text-xl">Nombre de la prenda</p>
                                                <p className="text-base">Marca</p>
                                            </div>
                                            <p className="text-gray-500 text-sm">En aulers hace 1 mes. En el carrito de 5 personas.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between mr-2 sm:mr-4">
                                        <span className="text-xl">18.000$</span>
                                        <button className="text-principal">Eliminar</button>
                                    </div>
                                </div>
                                <div className="h-small-line w-full mt-5 bg-slate-300"></div>
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