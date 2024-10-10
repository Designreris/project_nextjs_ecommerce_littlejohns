"use client"

import { useState } from "react"
import StoreDefaultDialog from "./StoreDefaultDialog"

export default function AccountDefaultStore() {
  const [storeDefault, setStoreDefault] = useState("no default store selected")

  return (
    <section
      id="storeDefault"
      className="bg-clr_light w-full p-4 mt-2 mb-2 rounded flex flex-col items-center justify-center sm:justify-start  sm:max-w-[768px]"
    >
      <h1 className="text-clr_secondary text-2xl text-center font-robotoSlab mt-2 mb-4">
        Your Store
      </h1>
      <p className="text-clr_secondary text-sm text-balance text-center m-2">
        Your default store is: <br />
        <span className="capitalize text-xl">{storeDefault}</span>
      </p>
      <StoreDefaultDialog />
    </section>
  )
}
