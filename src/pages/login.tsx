
export default function LoginPage() {
    return (
        <div className="w-full h-screen flex font-display overflow-hidden text-black bg-login bg-cover relative">
            <h1 className="absolute top-0 left-0 text-2xl font-semibold">Aulers</h1>
            <div className="lg:w-2/5 w-full h-full flex flex-col items-center justify-center bg-white">
                <div className="">
                    <h2 className="text-3xl font-semibold">Inicia sesión</h2>
                    <p className="text-base text-zinc-700 font-medium">Consegui ropa unica a un precio unico.</p>
                </div>

                <div className="h-20 w-full"></div>
                
                <div className="flex flex-col justify-center items-center w-full">
                    <div className="">
                        <p className="mb-2">Correo</p>
                        <div className="px-4 border w-64 border-gray-400 mb-4">
                            <input className="w-full h-10 outline-none text-black" placeholder="correo.ejemplo@mail.com">

                            </input>
                        </div>
                        <p className="mb-2">Contraseña</p>
                        <div className="px-4 border w-64 border-gray-400">
                            <input className="w-full h-10 outline-none text-black" placeholder="*******">

                            </input>
                        </div>
                    </div>
                    <div className="h-16 w-full"></div>
                    <div className="flex w-full justify-center">
                        <button className="py-1 px-8 bg-green rounded-sm text-base">Iniciar sesión</button>
                        <div className="w-6"></div>
                        <a className="py-1 px-8 border border-gray-300 rounded-sm text-base" href="/register">Registrate</a>
                    </div>
                </div>
                
            </div>
            <div className="lg:w-3/5 h-full w-0">
            </div>
        </div>
    )
}
