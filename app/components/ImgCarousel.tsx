"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

export default function ImgCarousel() {
  return (
    <section>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnMouseEnter: true,
          }),
        ]}
        opts={{
          loop: true,
        }}
        className="-z-10"
      >
        <CarouselContent>
          <CarouselItem>
            <Image
              src={
                "https://images.pexels.com/photos/280453/pexels-photo-280453.jpeg"
              }
              height={400}
              width={400}
              alt="Pizza - Created by Pixabay, Pexels"
              className="w-full object-cover lg:h-screen"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={
                "https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg"
              }
              height={400}
              width={400}
              alt="Fast food - Created by Norma Mortenson, Pexels"
              className="w-full object-cover  lg:h-screen"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={
                "https://images.pexels.com/photos/4393665/pexels-photo-4393665.jpeg"
              }
              height={400}
              width={400}
              alt="Fast food - Created by Norma Mortenson, Pexels"
              className="w-full object-cover  lg:h-screen"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  )
}
