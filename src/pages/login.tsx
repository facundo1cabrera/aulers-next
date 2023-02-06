import { useRouter } from 'next/navigation';


export default function LoginPage() {

    const router = useRouter();

    const handleLogin = () => {
        router.push('/');
    }
    

    return (
        <div className="w-full h-full flex justify-center items-center relative text-black">
            <div className="w-login h-full sm:my-12 shadow-2xl shadow-stone-500 flex flex-col items-center">
                <div className="h-14"></div>
                <h2 className="text-2xl mb-4">Bienvenido, de nuevo!</h2>
                <p className="opacity-75 font-medium">Conseguí ropa unica a un precio unico.</p>
                <p className="opacity-75 font-medium">Inicia sesión en Aulers.</p>
                <div className="h-10"></div>
                <div className="w-80 rounded-sm p-3 border relative border-gray-400">
                    <div className="absolute -top-3 bg-white px-2">Correo</div>
                    <input type="text" placeholder="emailpersonal@mail.com" className="outline-none"/>
                </div>
                <div className="h-10"></div>
                <div className="w-80 rounded-sm p-3 border relative border-gray-400">
                    <div className="absolute -top-3 bg-white px-2">Contraseña</div>
                    <input type="text" placeholder="********" className="outline-none"/>
                </div>
                <div className="h-14"></div>
                <button className="text-center bg-green w-80 h-10 rounded-sm transition-all duration-500 hover:font-medium hover:bg-light-blue text-xl" onClick={() => handleLogin()}>Iniciar sesión</button>
                <div className="flex mt-4 w-80">
                    <p>Olvidaste tu contraseña?</p>
                    <div className="w-2"></div>
                    <a href="/reset-password" className="text-purple hover:font-medium">Haz click aqui.</a>
                </div>
                <div className="flex my-6 items-center">
                    <div className="w-40 h-0 border border-gray-300"></div>
                    <p className="mx-4">O</p>
                    <div className="w-40 h-0 border border-gray-300"></div>
                </div>
                <a href="/register" className="mb-12 text-center items-center border border-gray-300 w-80 py-2 rounded-sm cursor-pointer hover:font-medium">Registrarse</a>
            </div>
        </div>
    );
}
