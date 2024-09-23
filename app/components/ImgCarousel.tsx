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
              className="h-[calc(100svh-6rem)] w-full object-cover"
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
              className="h-[calc(100svh-6rem)] w-full object-cover"
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
              className="h-[calc(100svh-6rem)] w-full object-cover"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  )
}
