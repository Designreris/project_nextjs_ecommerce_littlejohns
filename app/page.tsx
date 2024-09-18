import CardPromo from "./components/CardPromo"
import ImgCarousel from "./components/ImgCarousel"
import StoreFinderCard from "./components/StoreFinderCard"

export default function Home() {
  return (
    <main>
      <ImgCarousel />
      <StoreFinderCard />
      <CardPromo />
    </main>
  )
}
