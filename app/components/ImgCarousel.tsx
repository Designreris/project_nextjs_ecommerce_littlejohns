"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import notFound from "../notfound.jpg"

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
              width={1300}
              alt=""
              className="h-[calc(100svh-6rem)] w-full object-cover"
              placeholder="blur"
              blurDataURL="../notfound.jpg"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={
                "https://order.mybigjohns.com/UserFiles/Carousel/artboard%2034%20(2).jpg"
              }
              height={400}
              width={1300}
              alt=""
              className="h-[calc(100svh-6rem)] w-full object-cover"
              blurDataURL="../notfound.jpg"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={
                "https://order.mybigjohns.com/UserFiles/Carousel/carouselapp2.jpg"
              }
              height={400}
              width={1300}
              alt=""
              className="h-[calc(100svh-6rem)] w-full object-cover"
              blurDataURL="../notfound.jpg"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  )
}
