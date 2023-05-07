import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Header } from '@/components/Header'
import { Feed } from '@/components/Feed/Feed'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
      <div className="bg-principal h-screen">
        <Header />
        <Feed />
      </div>
    </>
  )
}
