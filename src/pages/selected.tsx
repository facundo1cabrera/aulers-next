import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero/Hero'
import { Gallery } from '@/components/Gallery'
import { SelectedItem } from '@/components/SelectedItem'

export default function SelectedPage() {
    return (
        <>
          <div className="">
            <Header />
            <SelectedItem />
            <Gallery />
          </div>
        </>
    )
}
