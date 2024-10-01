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
import { FaPlus } from "react-icons/fa"
import { FaAngleRight, FaCheck } from "react-icons/fa6"

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000))

export default function AddressDialog() {
  const [open, setOpen] = React.useState(false)

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e)
    wait().then(() => setOpen(false))
  }

  return (
    <Dialog>
      <DialogTrigger className="bg-clr_secondary p-4 text-xl font-medium rounded flex justify-center items-center [&>svg]:mr-2">
        <FaPlus />
        Add New Address
      </DialogTrigger>
      <DialogContent className="fixed h-screen w-screen bg-clr_light overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-clr_secondary text-2xl font-medium">
            New Address
          </DialogTitle>
          <DialogDescription className="text-clr_dark text-sm">
            Use the form below to add a new address.
          </DialogDescription>
        </DialogHeader>
        {/* Address Form */}
        <form onSubmit={(e) => handleFormSubmit}>
          <div className="relative text-clr_secondary [&>label]:text-sm flex flex-col text-start self-start border-b-2 border-clr_gray mb-4 w-full">
            <label htmlFor="number">Number *</label>
            <input type="text" name="number" id="number" required />
          </div>
          <div className="relative text-clr_secondary [&>label]:text-sm flex flex-col text-start self-start border-b-2 border-clr_gray mb-4 w-full">
            <label htmlFor="firstLine">Address 1 *</label>
            <input type="text" name="firstLine" id="firstLine" required />
          </div>
          <div className="relative text-clr_secondary [&>label]:text-sm flex flex-col text-start self-start border-b-2 border-clr_gray mb-4 w-full">
            <label htmlFor="secondLine">Address 2</label>
            <input type="text" name="secondLine" id="secondLine" />
          </div>
          <div className="relative text-clr_secondary [&>label]:text-sm flex flex-col text-start self-start border-b-2 border-clr_gray mb-4 w-full">
            <label htmlFor="city">City/Town *</label>
            <input type="text" name="city" id="city" required />
          </div>
          <div className="relative text-clr_secondary [&>label]:text-sm flex flex-col text-start self-start border-b-2 border-clr_gray mb-4 w-full">
            <label htmlFor="postcode">Post Code *</label>
            <input type="text" name="postcode" id="postcode" required />
          </div>
          <Button type="submit" className="bg-clr_secondary w-full">
            <FaCheck className="text-clr_light size-6 mr-auto" />
            Add Address
            <FaAngleRight className="text-clr_light size-6 ml-auto" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
