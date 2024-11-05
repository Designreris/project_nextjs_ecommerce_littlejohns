"use client"
import Link from "next/link"
import { useParams } from "next/navigation"
import { FaFacebook, FaPhone, FaTwitter } from "react-icons/fa6"

export default function storeProfilePage() {
  const storeData = [
    {
      storeId: "00001",
      storeName: "Quinton",
      storeAddress: "782 Hagley Road West, Quinton, Birmingham",
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
      storeFeatures: [
        "All major debit & credit cards accepted",
        "Click and Collect",
        "Food To Go",
        "Home Delivery",
      ],
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
      storeFeatures: [
        "All major debit & credit cards accepted",
        "Click and Collect",
        "Food To Go",
        "Home Delivery",
      ],
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
      storeFeatures: [
        "All major debit & credit cards accepted",
        "Click and Collect",
        "Food To Go",
        "Home Delivery",
      ],
    },
  ]

  const params = useParams<{ id: string }>()
  const storeInfo = storeData.find((store) => store.storeId === params.id)
  if (storeInfo !== null) {
    const storeOpenHours = storeInfo?.storeOpenHours || null
    const storeDeliveryHours = storeInfo?.storeDeliveryHours || null
    const storeFeatures = storeInfo?.storeFeatures || null
    return (
      <main className="bg-clr_background p-4 flex flex-col items-center justify-start w-full [&>section]:max-w-[768px]">
        {/* Map */}
        <section className="w-full bg-clr_light rounded-tl rounded-tr"></section>
        {/* Contact */}
        <section className="bg-clr_light p-4 w-full text-center">
          <h2 className="text-clr_secondary text-2xl text-center font-medium font-robotoSlab">
            {storeInfo?.storeName}
          </h2>
          <address className="text-clr_dark text-wrap">
            {storeInfo?.storeAddress}
            <br />
            {storeInfo?.storePostcode}
          </address>
          <div className="flex justify-center items-center gap-2 mt-4">
            <Link href={"https://www.facebook.com/itsmybigjohns"}>
              <FaFacebook className="bg-clr_accent rounded-full size-6 border-2 border-clr_accent hover:border-clr_primary hover:bg-clr_primary transition-all" />
            </Link>
            <Link href={"https://twitter.com/itsmybigjohns"}>
              <FaTwitter className="bg-clr_accent rounded-full size-6 border-2 border-clr_accent hover:border-clr_primary hover:bg-clr_primary transition-all p-1" />
            </Link>
          </div>
        </section>
        {/* Store Phone Number */}
        <section className="bg-clr_light flex justify-center items-center p-4 w-full text-center text-2xl border-t-2 border-b-2 border-clr_gray">
          <a
            href={`tel:${storeInfo?.storePhone}`}
            className="bg-clr_secondary flex w-fit items-center justify-center rounded p-4  hover:bg-clr_accent"
          >
            <FaPhone className="mr-2 translate-y-[2px]" />
            {`${storeInfo?.storePhone.slice(
              0,
              4
            )} ${storeInfo?.storePhone.slice(
              4,
              7
            )} ${storeInfo?.storePhone.slice(7)}`}
          </a>
        </section>
        {/* Open Hours */}
        <section className="flex flex-col items-center justify-start w-full bg-clr_light text-clr_secondary p-4">
          <h3 className="text-center w-full text-xl font-medium">
            Opening Hours
          </h3>
          {storeOpenHours !== null ? (
            Object.entries(storeOpenHours).map((item) => (
              <div
                key={item[0]}
                className="flex justify-between items-start p-2 w-full"
              >
                <p>{item[0]}</p>
                <p>{item[1]}</p>
              </div>
            ))
          ) : (
            <div>No data found</div>
          )}
        </section>
        {/* Delivery Hours */}
        <section className="flex flex-col items-center justify-start w-full bg-clr_light text-clr_secondary p-4 border-t-2 border-clr_gray">
          <h3 className="text-center w-full text-xl font-medium">
            Delivery Hours
          </h3>
          {storeDeliveryHours !== null ? (
            Object.entries(storeDeliveryHours).map((item) => (
              <div
                key={item[0]}
                className="flex justify-between items-start p-2 w-full"
              >
                <p>{item[0]}</p>
                <p>{item[1]}</p>
              </div>
            ))
          ) : (
            <div>No data found!</div>
          )}
        </section>
        {/* Features */}
        <section className="flex flex-col items-center justify-start w-full bg-clr_light text-clr_secondary rounded-bl rounded-br p-4 border-t-2 border-clr_gray">
          <h3 className="text-center w-full text-xl font-medium">Features</h3>
          {storeFeatures !== null ? (
            storeFeatures.map((item) => (
              <div key={item} className="text-balance text-center mb-1">
                <p>{item}</p>
              </div>
            ))
          ) : (
            <div>No features found!</div>
          )}
        </section>
      </main>
    )
  } else {
    return <div>No stores found, id does not match any storeId in database</div>
  }
}
