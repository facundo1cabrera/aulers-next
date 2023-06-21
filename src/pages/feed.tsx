import { Card } from '@/components/Card'
import { Header } from '@/components/Header'

export default function FeedPage() {

  // get array of images url from api
  var images = ["image1.jpg", "image2.jpg", "image3.jpg", "set2.jpg", "set4.jpg"]


  return (
    <>
      <div className="bg-principal ">
        <div className="max-w-5xl m-auto columns-5 gap-x-3 box-border pt-20">
            {
                images.map(image => (
                    <Card imageUrl={image} />
                ))
            }
        </div>
      </div>
    </>
  )
}
