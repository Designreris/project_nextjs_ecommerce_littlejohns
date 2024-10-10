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
export default function WalletDialog() {
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
        Add New Card
      </DialogTrigger>
      <DialogContent className="fixed h-screen w-screen bg-clr_light overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-clr_secondary text-2xl font-medium">
            New Card
          </DialogTitle>
          <DialogDescription className="text-clr_dark text-sm">
            Use the form below to add a new card to your wallet.
          </DialogDescription>
        </DialogHeader>
        {/* Card Form */}
        <form onSubmit={(e) => handleFormSubmit}>
          <div className="relative text-clr_secondary [&>label]:text-sm flex flex-col text-start self-start border-b-2 border-clr_gray mb-4 w-full">
            <label htmlFor="cardNo">Card Number *</label>
            <input type="text" name="cardNo" id="cardNo" required />
          </div>
          <div className="relative text-clr_secondary [&>label]:text-sm flex flex-col text-start self-start border-b-2 border-clr_gray mb-4 w-full">
            <label htmlFor="expire">Expiry Date *</label>
            <input type="text" name="expire" id="expire" required />
          </div>

          <div className="relative text-clr_secondary [&>label]:text-sm flex flex-col text-start self-start border-b-2 border-clr_gray mb-4 w-full">
            <label htmlFor="code">CVC/CVV Code *</label>
            <input type="text" name="code" id="code" required />
          </div>
          <div className="relative text-clr_secondary [&>label]:text-sm flex flex-col text-start self-start border-b-2 border-clr_gray mb-4 w-full">
            <label htmlFor="name">Name on Card *</label>
            <input type="text" name="name" id="name" required />
          </div>
          <Button type="submit" className="bg-clr_secondary w-full">
            <FaCheck className="text-clr_light size-6 mr-auto" />
            Add Card
            <FaAngleRight className="text-clr_light size-6 ml-auto" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
