import StoreFinderMethodBtn from "./StoreFinderMethodBtn"
import StoreFinderPostCodes from "./StoreFinderPostCodes"

export default function StoreFinderCard() {
  return (
    <section className="flex flex-col justify-center items-center bg-clr_card p-4">
      <StoreFinderMethodBtn />
      <StoreFinderPostCodes />
    </section>
  )
}
