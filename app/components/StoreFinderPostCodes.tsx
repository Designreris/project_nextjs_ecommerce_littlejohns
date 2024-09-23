"use client"
import { useState } from "react"
import { FaMapPin } from "react-icons/fa6"
import { IoClose } from "react-icons/io5"

export default function StoreFinderPostCodes() {
  const [formFocus, setFormFocus] = useState(false)

  return (
    <div className="flex flex-row justify-center items-center p-2 max-w-60">
      <div
        className={`${
          formFocus === false ? "hidden" : "flex"
        } fixed flex-col justify-start items-center pt-[10svh] inset-0 z-40 bg-clr_accent opacity-90`}
      >
        <h2 className="font-robotoSlab text-4xl font-bold">Find your store</h2>
        <p className="text-sm mt-8 text-balance text-center">
          We just need your postcode to find your local store
        </p>
        <button
          type="button"
          onClick={() => setFormFocus(false)}
          className="fixed flex items-center justify-center text-2xl bottom-16 font-semibold [&>svg]:size-10"
        >
          <IoClose />
          No Thanks
        </button>
      </div>
      <form className="flex flex-row justify-center items-center max-w-60">
        <input
          type="text"
          id="postcode"
          required
          onClickCapture={() => setFormFocus(true)}
          className={`${
            formFocus === true ? "z-50 fixed top-1/2 -translate-x-[65%]" : ""
          } w-32 p-2 rounded text-clr_dark bg-clr_light`}
        />
        <button
          type="submit"
          className={`${
            formFocus === true ? "fixed z-50 top-1/2 translate-x-[45%]" : ""
          } flex flex-row text-nowrap justify-center items-center bg-clr_primary p-2 ml-2 rounded`}
        >
          <FaMapPin />
          Find My Store
        </button>
      </form>
    </div>
  )
}
