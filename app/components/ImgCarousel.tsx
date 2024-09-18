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
                "https://order.mybigjohns.com/UserFiles/Carousel/carouseldrivethru2.jpg"
              }
              height={400}
              width={400}
              alt=""
              className="w-full object-cover object-center lg:h-screen"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={
                "https://order.mybigjohns.com/UserFiles/Carousel/carousel20pizza2.jpg"
              }
              height={400}
              width={400}
              alt=""
              className="w-full object-cover object-center lg:h-screen"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={
                "https://order.mybigjohns.com/UserFiles/Carousel/carouselapp2.jpg"
              }
              height={400}
              width={400}
              alt=""
              className="w-full object-cover object-center lg:h-screen"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  )
}
