import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { BiShoppingBag } from 'react-icons/bi'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header className="w-full h-16 border-b-2 border-neutral-200 font-display">
        <div className="flex h-full w-11/12 justify-between m-auto items-center text-black">
          <h1 className="font-semibold text-2xl hover:cursor-pointer">Aulers</h1>
          <div className="flex font-light text-base justify-between w-44">
            <h2>Hombre</h2>
            <h3>Mujer</h3>
          </div>
          <div className="flex justify-between w-40">
            <button className="rounded-md border border-neutral-200 py-1 px-4 hover:bg-green">
              Registrate
            </button>
            <BiShoppingBag size={30} className="hover:cursor-pointer"/>
          </div>
        </div>
      </header>
      <main className="font-display">
        <div className="w-full h-full bg-hero bg-no-repeat bg-cover pb-60">
          <div className="lg:w-4/5 m-auto pt-24 text-black">
              <h1 className="text-3xl lg:w-2/4">Compra ropa como nunca habias hecho</h1>
              <h2 className="opacity-90 font-light text-2xl lg:w-3/5 mt-2">Viví una experiencia unica comprando ropa en linea. Consegui prendas unicas al mejor precio.</h2>
              <button className="bg-green py-1 px-6 rounded-md mt-8 text-xl border border-neutral-200 hover:bg-white">
                Obtené descuentos
              </button>
          </div>
        </div>
        <div className="w-full h-screen">
          <div className="w-full h-12 bg-purple-hero bg-cover bg-no-repeat"></div>
          <div className="bg-dark-purple w-full">
          </div>

        </div>
      </main>
    </>
  )
}
