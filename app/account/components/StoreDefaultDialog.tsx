"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import React from "react"
import { FaAngleRight, FaCheck, FaStore } from "react-icons/fa6"

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000))

export default function StoreDefaultDialog() {
  const storeData = [
    {
      storeId: "00001",
      storeName: "Quinton",
      storeAddress: "782 Hagley Road West, Birmingham",
      storePostcode: "B68 0PJ",
      storePhone: "01215551234",
    },
    {
      storeId: "00002",
      storeName: "Northfield",
      storeAddress: "831 Bristol Road South, Birmingham",
      storePostcode: "B31 2PA",
      storePhone: "01215556969",
    },
    {
      storeId: "00003",
      storeName: "SellyOak",
      storeAddress: "762 Bristol Road, Birmingham",
      storePostcode: "B29 6NA",
      storePhone: "01215553366",
    },
  ]
  const [open, setOpen] = React.useState(false)

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e)
    wait().then(() => setOpen(false))
  }

  return (
    <Dialog>
      <DialogTrigger className="bg-clr_secondary text-clr_light p-4 rounded flex items-center justify-center [&>svg]:mr-2 [&>svg]:size-5 mt-2">
        <FaStore />
        Choose Default Store
      </DialogTrigger>
      <DialogContent className="fixed h-screen w-screen bg-clr_light overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-clr_secondary text-2xl font-medium">
            Choose a store
          </DialogTitle>
          <DialogDescription className="text-clr_dark text-sm">
            Choose a store from the list of stores closest to you!
          </DialogDescription>
        </DialogHeader>
        {/* Default Store Form */}
        <form onSubmit={() => handleFormSubmit}>
          {storeData !== null ? (
            storeData.map((store) => (
              <div
                key={store.storeId}
                className="bg-clr_gray text-clr_secondary p-2 rounded m-2 flex flex-col justify-center items-stretch"
              >
                <label
                  htmlFor={store.storeId}
                  className="flex items-center justify-between text-xl font-medium"
                >
                  {store.storeName || "store unknown"}
                  <input
                    type="radio"
                    className="checked:text-clr_primary checked:outline-clr_primary"
                    name={"default_store"}
                    id={store.storeId}
                  />
                </label>
                <p>{store.storeAddress}</p>
                <p>{store.storePostcode}</p>
                <br />
                <p className="text-xl font-medium">{store.storePhone}</p>
              </div>
            ))
          ) : (
            <div>
              <p>No stores found in your area!</p>
            </div>
          )}

          <Button type="submit" className="bg-clr_secondary w-full">
            <FaCheck className="text-clr_light size-6 mr-auto" />
            Choose Store
            <FaAngleRight className="text-clr_light size-6 ml-auto" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
