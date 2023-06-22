import { useRouter } from 'next/navigation';
import { Logo } from "@/components/Logo/";

export default function LoginPage() {

    const router = useRouter();

    const handleLogin = () => {
        router.push('/');
    }
    
    return (
        <div className="flex h-full w-full">

            <section className="min-h-screen w-full h-full shadow-2xl flex flex-col lg:w-2/5">

                <div className="pl-5 pt-2.5 mb-10">
                    <Logo></Logo>
                </div>

                <main className="flex flex-col items-center justify-center flex-grow">
                    <div className='w-full'>
                        <h2 className="text-3xl text-left px-login-container-large pb-6 leading-tight">
                            Bienvenido, de nuevo!
                        </h2> 
                        <div className="mb-36 px-login-container-large"> 
                            <p className="opacity-75 font-medium text-left mb-4">
                                Consegui ropa unica a un precio unico. Inicia sesión en Aulers.
                            </p>
                            <div className="flex flex-col items-start justify-">
                                <p className="opacity-75 font-medium text-center">
                                    No tenes una cuenta todavia?
                                </p>
                                <a href="/login" className="text-principal underline hover:font-medium">
                                    Creá una
                                </a>
                            </div>

                        </div>
                    <div className="flex flex-col items-center">
                        

                        <div className="h-6 w-full px-login-container-large  rounded-sm pb-6 relative mb-28">
                            <input type="text" placeholder="Email" className="border-b-2 border-gray-400 outline-none w-full 
                        hover:placeholder:text-principal hover:border-principal focus:border-principal focus:placeholder:text-principal"/>
                        </div>

                        <div className="h-6 w-full px-login-container-large rounded-sm pb-6 relative mb-28">
                            <input type="text" placeholder="Contraseña" className="border-b-2 border-gray-400 outline-none w-full 
                        hover:placeholder:text-principal hover:border-principal focus:border-principal focus:placeholder:text-principal"/>
                        </div>

                        <div className=" items-center w-full px-login-container-large">
                            <button className="py-2 px-4 w-full h-12 bg-principal rounded-sm text-white font-semibold text-xl text-center">
                                Iniciar sesión
                            </button>

                            <div className="flex mt-5 mb-8 justify-between">
                                <p>
                                    ¿Olvidaste tu contraseña?
                                </p>

                                <a href="/login" className="text-principal underline hover:font-medium">
                                    Haz click aquí
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </main>
            
            </section>

            <section className="bg-red-500 h-100% w-3/5 hidden lg:block">
                <img className=" w-full h-full object-cover object-center" src="image4.jpg" alt="" />
            </section>

        </div>
    );
}
