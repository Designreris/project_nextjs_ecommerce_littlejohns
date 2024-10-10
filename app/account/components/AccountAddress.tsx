"use client"

import AddressAccordion from "./AddressAccordion"
import AddressDialog from "./AddressDialog"

export default function AccountAddress() {
  const addressData = [
    {
      id: "340c7f0kl2j9",
      number: "123",
      firstLine: "Made Up Avenue",
      city: "Frankfurt",
      postcode: "FR12 3AB",
    },
    {
      id: "340c7f0ggd2j9",
      number: "234",
      firstLine: "Hope Lane",
      city: "Frankfurt",
      postcode: "FR12 1AB",
    },
  ]

  return (
    <section
      id="address"
      className="bg-clr_light w-full p-4 mt-2 mb-2 rounded flex flex-col items-center justify-center sm:justify-start  sm:max-w-[768px]"
    >
      <h1 className="text-clr_secondary text-2xl text-center font-robotoSlab mt-2 mb-4">
        Address Book
      </h1>
      {addressData.map((item) => {
        return <AddressAccordion key={item.id} data={item} />
      })}
      <AddressDialog />
    </section>
  )
}
