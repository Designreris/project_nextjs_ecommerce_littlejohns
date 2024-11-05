"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"
import storeBg from "@/app/storebackground.jpeg"

export default function storesPage() {
  const storeData = [
    {
      storeId: "00001",
      storeName: "Quinton",
      storeAddress: "782 Hagley Road West, Birmingham",
      storePostcode: "B68 0PJ",
      storePhone: "01215551234",
      storeOpenHours: {
        Monday: "11:00 - 23:30",
        Tuesday: "11:00 - 23:30",
        Wednesday: "11:00 - 23:30",
        Thursday: "11:00 - 23:30",
        Friday: "11:00 - 23:30",
        Saturday: "11:00 - 23:30",
        Sunday: "12:00 - 23:30",
      },
      storeDeliveryHours: {
        Monday: "12:30 - 23:30",
        Tuesday: "12:30 - 23:30",
        Wednesday: "12:30 - 23:30",
        Thursday: "12:30 - 23:30",
        Friday: "12:30 - 23:30",
        Saturday: "12:30 - 23:30",
        Sunday: "12:30 - 23:30",
      },
    },
    {
      storeId: "00002",
      storeName: "Northfield",
      storeAddress: "831 Bristol Road South, Birmingham",
      storePostcode: "B31 2PA",
      storePhone: "01215556969",
      storeOpenHours: {
        Monday: "11:00 - 23:30",
        Tuesday: "11:00 - 23:30",
        Wednesday: "11:00 - 23:30",
        Thursday: "11:00 - 23:30",
        Friday: "11:00 - 23:30",
        Saturday: "11:00 - 23:30",
        Sunday: "12:00 - 23:30",
      },
      storeDeliveryHours: {
        Monday: "12:30 - 23:30",
        Tuesday: "12:30 - 23:30",
        Wednesday: "12:30 - 23:30",
        Thursday: "12:30 - 23:30",
        Friday: "12:30 - 23:30",
        Saturday: "12:30 - 23:30",
        Sunday: "12:30 - 23:30",
      },
    },
    {
      storeId: "00003",
      storeName: "SellyOak",
      storeAddress: "762 Bristol Road, Birmingham",
      storePostcode: "B29 6NA",
      storePhone: "01215553366",
      storeOpenHours: {
        Monday: "11:00 - 23:30",
        Tuesday: "11:00 - 23:30",
        Wednesday: "11:00 - 23:30",
        Thursday: "11:00 - 23:30",
        Friday: "11:00 - 23:30",
        Saturday: "11:00 - 23:30",
        Sunday: "12:00 - 23:30",
      },
      storeDeliveryHours: {
        Monday: "12:30 - 23:30",
        Tuesday: "12:30 - 23:30",
        Wednesday: "12:30 - 23:30",
        Thursday: "12:30 - 23:30",
        Friday: "12:30 - 23:30",
        Saturday: "12:30 - 23:30",
        Sunday: "12:30 - 23:30",
      },
    },
  ]

  const router = useRouter()

  function handleStoreBtn(id: string) {
    try {
      router.push(`/store-profile/${id}`)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <main className="bg-clr_background p-4 flex flex-col justify-start items-center">
      <h1 className="text-clr_secondary font-medium">
        There's a LittleJohns near you
      </h1>
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 rounded">
        {storeData !== null ? (
          storeData.map((store) => (
            <div
              key={store.storeId}
              className="bg-clr_primary shadow-2xl rounded"
            >
              <Image
                src={storeBg}
                alt=""
                width={200}
                height={200}
                onClick={() => handleStoreBtn(store.storeId)}
                className="object-cover object-center w-full rounded-tl rounded-tr"
              />
              <div className="m-2">
                <h2 className="font-medium">
                  {store.storeName || "store unknown"}
                </h2>
                <address className="text-clr_greyed">
                  {store.storeAddress}
                </address>
                <a
                  className="text-clr_dark font-medium"
                  href={`tel:${store.storePhone}`}
                >
                  {store.storePhone}
                </a>
              </div>
              <button
                onClick={() => handleStoreBtn(store.storeId)}
                className="flex justify-center items-center p-4 w-full bg-clr_secondary rounded-br rounded-bl hover:bg-clr_accent"
              >
                Store Info
              </button>
            </div>
          ))
        ) : (
          <div>
            <p>No stores found in your area!</p>
          </div>
        )}
      </div>
    </main>
  )
}
