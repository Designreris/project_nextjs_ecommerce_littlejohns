"use client"
import { FaMapPin, FaTruck } from "react-icons/fa6"
import { useState } from "react"

export default function StoreFinderMethodBtn() {
  const [delivery, setDelivery] = useState(true)
  const [collect, setCollect] = useState(false)

  const handleMethod = () => {
    if (delivery === true) {
      setDelivery(false)
      setCollect(true)
    } else {
      setDelivery(true)
      setCollect(false)
    }
  }

  return (
    <div className="flex flex-row justify-center items-center p-2  bg-clr_primary border-solid rounded max-w-60">
      <button
        type="button"
        onClick={() => handleMethod()}
        className={`${
          delivery === false ? "text-clr_greyed" : ""
        } flex flex-row justify-center items-center border-clr_greyed border-r-2 pr-2  [&>svg]:m-1`}
      >
        <FaTruck />
        Delivery
      </button>
      <button
        type="button"
        onClick={() => handleMethod()}
        className={`${
          collect === false ? "text-clr_greyed" : ""
        } flex flex-row justify-center items-center [&>svg]:m-1`}
      >
        <FaMapPin />
        Collect
      </button>
    </div>
  )
}
