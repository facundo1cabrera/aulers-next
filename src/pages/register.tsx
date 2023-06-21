export default function registerPage() {
    return (
        <div className="w-full h-full flex justify-center items-center relative text-black bg-principal">
            <div className="w-login h-full my-12 shadow-2xl shadow-stone-500 flex flex-col items-center bg-white">
                <div className="h-10"></div>
                <h2 className="text-2xl mb-4">Creá tu cuenta!</h2>
                <p className="opacity-75 font-medium 2-96 text-center">Consegui ropa unica a un precio unico.</p>
                <p className="opacity-75 font-medium w-96 text-center">
                    Crea una cuenta en Aulers y cambia la forma en la que compras ropa online
                </p>
                <div className="h-8"></div>
                <div className="w-80 rounded-sm p-3 border relative border-gray-400">
                    <div className="absolute -top-3 bg-white px-2">Nombre</div>
                    <input type="text" placeholder="Escribe tu nombre" className="outline-none"/>
                </div>
                <div className="h-6"></div>
                <div className="w-80 rounded-sm p-3 border relative border-gray-400">
                    <div className="absolute -top-3 bg-white px-2">Apellido</div>
                    <input type="text" placeholder="Escribe tu apellido" className="outline-none"/>
                </div>
                <div className="h-6"></div>
                <div className="w-80 rounded-sm p-3 border relative border-gray-400">
                    <div className="absolute -top-3 bg-white px-2">Correo</div>
                    <input type="text" placeholder="Escribe tu email personal" className="outline-none"/>
                </div>
                <div className="h-6"></div>
                <div className="w-80 rounded-sm p-3 border relative border-gray-400">
                    <div className="absolute -top-3 bg-white px-2">Contraseña</div>
                    <input type="text" placeholder="Escribe tu contraseña" className="outline-none"/>
                </div>
                <div className="h-8"></div>
                <button className="text-center bg-green w-80 h-10 rounded-sm transition-all duration-500 hover:bg-secondary-h bg-secondary text-xl ">Register</button>
                <div className="flex mt-2 w-80 mb-8">
                    <p>Ya tenes una cuenta?</p>
                    <div className="w-1"></div>
                    <a href="/login" className="text-purple hover:font-medium">Inicia sesión.</a>
                </div>
            </div>
        </div>
    );
}