"use client"
import { useState } from "react"
import { FaThumbsUp, FaCircleInfo } from "react-icons/fa6"
import { IoClose } from "react-icons/io5"

export default function AccountDetails() {
  const [infoName, setInfoName] = useState(false)
  const [infoDob, setInfoDob] = useState(false)
  const [infoPostcode, setInfoPostcode] = useState(false)
  const [infoMobile, setInfoMobile] = useState(false)

  return (
    <section
      id="details"
      className="bg-clr_light p-4 mt-2 mb-2 rounded flex flex-col items-center justify-center"
    >
      <h1 className="text-clr_secondary text-2xl font-robotoSlab mt-2 mb-4">
        Your Details
      </h1>
      <form className="flex flex-col items-center justify-center">
        {/* Form Inputs */}
        <div className="relative text-clr_secondary [&>label]:text-sm flex flex-col text-start self-start border-b-2 border-clr_gray mb-4 w-full">
          <label htmlFor="email">Email Address*</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="p-2 rounded mb-2 text-st text-clr_dark font-medium"
          />
        </div>
        <div className="relative text-clr_secondary [&>label]:text-sm flex flex-col text-start self-start border-b-2 border-clr_gray mb-4 w-full">
          <label
            htmlFor="firstname"
            className="flex justify-between items-center"
          >
            First Name*{" "}
            <FaCircleInfo
              className="hover:cursor-pointer"
              onClick={() => setInfoName(true)}
            />
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            required
            className="p-2 rounded mb-2 text-clr_dark font-medium"
          />
          <div
            className={`${
              infoName === false ? "hidden" : ""
            } absolute bg-clr_background rounded p-4 text-balance text-center text-xs`}
          >
            <IoClose
              className="absolute top-1 right-1 size-6 hover:cursor-pointer"
              onClick={() => setInfoName(false)}
            />
            <p>
              You are not just an email address to us, so we would like to use
              your name whenever we talk to you.
            </p>
          </div>
        </div>
        <div className="relative text-clr_secondary [&>label]:text-sm flex flex-col text-start self-start border-b-2 border-clr_gray mb-4 w-full">
          <label htmlFor="lastname">Surname</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            className="p-2 rounded mb-2 text-clr_dark font-medium"
          />
        </div>
        <div className="relative text-clr_secondary [&>label]:text-sm flex flex-col text-start self-start border-b-2 border-clr_gray mb-4 w-full">
          <label htmlFor="dob" className="flex justify-between items-center">
            Date Of Birth{" "}
            <FaCircleInfo
              className="hover:cursor-pointer"
              onClick={() => setInfoDob(true)}
            />
          </label>
          <input
            type="date"
            name="dob"
            id="dob"
            className="p-2 rounded mb-2 text-clr_dark font-medium"
          />
          <div
            className={`${
              infoDob === false ? "hidden" : ""
            } absolute bg-clr_background rounded p-4 text-balance text-center text-xs`}
          >
            <IoClose
              className="absolute top-1 right-1 size-6 hover:cursor-pointer"
              onClick={() => setInfoDob(false)}
            />
            <p>
              We would like to use your date of birth so that we can send you
              amazing treats around your birthday.
            </p>
          </div>
        </div>
        <div className="relative text-clr_secondary [&>label]:text-sm flex flex-col text-start self-start border-b-2 border-clr_gray mb-4 w-full">
          <label
            htmlFor="postcode"
            className="flex justify-between items-center"
          >
            Post Code*{" "}
            <FaCircleInfo
              className="hover:cursor-pointer"
              onClick={() => setInfoPostcode(true)}
            />
          </label>
          <input type="text" name="postcode" id="postcode" required />
          <div
            className={`${
              infoPostcode === false ? "hidden" : ""
            } absolute bg-clr_background rounded p-4 text-balance text-center text-xs`}
          >
            <IoClose
              className="absolute top-1 right-1 size-6 hover:cursor-pointer"
              onClick={() => setInfoPostcode(false)}
            />
            <p>
              We would like to use your postal code to find your local store.
            </p>
          </div>
        </div>
        <div className="relative text-clr_secondary [&>label]:text-sm flex flex-col text-start self-start border-b-2 border-clr_gray mb-4 w-full">
          <label htmlFor="mobile" className="flex justify-between items-center">
            Mobile{" "}
            <FaCircleInfo
              className="hover:cursor-pointer"
              onClick={() => setInfoMobile(true)}
            />
          </label>
          <input
            type="number"
            name="mobile"
            id="mobile"
            className="p-2 rounded mb-2 text-clr_dark font-medium"
          />
          <div
            className={`${
              infoMobile === false ? "hidden" : ""
            } absolute bg-clr_background rounded p-4 text-balance text-center text-xs`}
          >
            <IoClose
              className="absolute top-1 right-1 size-6 hover:cursor-pointer"
              onClick={() => setInfoMobile(false)}
            />
            <p>So we can contact you about your order.</p>
          </div>
        </div>

        {/* Promo Checkboxes */}
        <div className="text-clr_secondary flex flex-col items-center justify-center m-2 text-sm [&>h2]:font-medium border-b-2 border-clr_gray">
          <h2>I would like to receive email</h2>
          <p className="text-xs text-balance text-center italic">
            Giving us your consent to use your email address means we can send
            you offers, competitions, and important news direct to your inbox.
          </p>
          <input
            type="checkbox"
            name="emailPromo"
            id="emailPromo"
            className="rounded-full border-none bg-clr_gray m-2 size-6 text-clr_secondary focus:ring-clr_secondary"
          />
        </div>
        <div className="text-clr_secondary flex flex-col items-center justify-center m-2 text-sm [&>h2]:font-medium border-b-2 border-clr_gray">
          <h2>I would like to receive SMS</h2>
          <p className="text-xs text-balance text-center italic">
            We would like to use your mobile number so that we can send you
            offers straight to your phone or call you regarding a competition
            you may have entered.
          </p>
          <input
            type="checkbox"
            name="smsPromo"
            id="smsPromo"
            className="rounded-full border-none bg-clr_gray m-2 size-6 text-clr_secondary focus:ring-clr_secondary"
          />
        </div>
        <div className="text-clr_secondary flex flex-col items-center justify-center m-2 text-sm [&>h2]:font-medium border-b-2 border-clr_gray">
          <h2>I would like to receive mail</h2>
          <p className="text-xs text-balance text-center italic">
            We would like to use your address so that we can mail you offers,
            competitions, and important news.
          </p>
          <input
            type="checkbox"
            name="mailPromo"
            id="mailPromo"
            className="rounded-full border-none bg-clr_gray m-2 size-6 text-clr_secondary focus:ring-clr_secondary"
          />
        </div>
        <button
          type="submit"
          className="bg-clr_secondary flex items-center justify-center p-4 rounded [&>svg]:size-6 [&>svg]:mr-2 font-medium"
        >
          <FaThumbsUp />
          Save Details
        </button>
      </form>
    </section>
  )
}
