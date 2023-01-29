import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Card } from '@/components/Card/'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="font-display w-full">
        <div className="w-full h-full bg-hero bg-no-repeat bg-cover pb-60">
          <div className="lg:w-5/6 w-full m-auto pt-36 text-black">
              <h1 className="text-3xl lg:w-2/4">Compra ropa como nunca habias hecho</h1>
              <h2 className="opacity-90 font-light text-2xl lg:w-3/5 mt-2">Viví una experiencia unica comprando ropa en linea. Consegui prendas unicas al mejor precio.</h2>
              <button className="bg-green py-1 px-6 rounded-md mt-8 text-xl border transition-all duration-500 border-neutral-200 hover:bg-light-blue">
                Obtené descuentos
              </button>
          </div>
        </div>
        <div className="w-full h-fit">
          <div className="h-24">
            <svg className="h-24 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon fill="#271F5F" points="0,100 100,0 100,100"/>
            </svg>
          </div>
          <div className="bg-dark-purple bg-no-repeat bg-cover w-full h-3/4 relative overflow-hidden shadow-black shadow-sm">
            <div className="lg:w-4/5 m-auto py-24">
              <h2 className="text-2xl font-medium text-white">Elegi tus medidas y empezá a ver como te quedaría la ropa</h2>
              <div className="mt-8 flex text-xl space-x-4 justify-center items-center w-64 transition-all duration-500 bg-green py-1 rounded-md border border-neutral-600 hover:bg-light-blue cursor-pointer">
                <p>Crear Medidas</p>
                <AiOutlineArrowRight size={30}/>
              </div>
            </div>
            <div className="rounded-full h-96 w-96 border absolute top-0 right-16 border-white opacity-30"></div>
          </div>
        </div>
        <div className="w-full h-16 flex items-center border-b-2 border-neutral-200">
          <h2 className="ml-5 sm:ml-16 lg:ml-28 text-2xl font-medium">Explorá</h2>
        </div>
        <div className="h-screen w-full">
          <div className='w-11/12 m-auto h-full flex flex-wrap justify-start items-center'>

            <Card />

            <Card />


            <div className="w-full border border-neutral-200"></div>

            <Card />

          </div>
        </div>
      </main>
    </>
  )
}
