import Image from "next/image"

export default function CardPromo() {
  return (
    <section className="relative -z-20 flex flex-col items-center justify-center">
      <Image
        src={"https://images.pexels.com/photos/479450/pexels-photo-479450.jpeg"}
        height={400}
        width={400}
        alt="Background cardboard picture by icon0com, Pexels"
        className="absolute top-0 h-full w-full -z-30 object-fill"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-3 gap-1 p-2 [&>img]:w-full [&>img]:object-cover">
        <Image
          src={
            "https://order.mybigjohns.com/UserFiles/Carousel/BJbestpizzabrum.jpg"
          }
          height={400}
          width={400}
          alt="Promo - best pizza ,BigJohns"
          className="col-span-2 aspect-square sm:aspect-auto"
        />
        <Image
          src={"https://order.mybigjohns.com/UserFiles/Images/byopizzahero.jpg"}
          height={400}
          width={400}
          alt="Promo - build your own pizza ,BigJohns"
          className="col-span-1 aspect-square sm:aspect-auto"
        />
        <Image
          src={
            "https://order.mybigjohns.com/UserFiles/Images/crispychickenhero.jpg"
          }
          height={400}
          width={400}
          alt="Promo - Crispy chicken legend ,BigJohns"
          className="col-span-1 aspect-square sm:aspect-auto"
        />
      </div>
    </section>
  )
}
