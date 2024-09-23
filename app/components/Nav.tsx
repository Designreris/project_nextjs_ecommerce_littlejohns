"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { IoMenu } from "react-icons/io5"

export default function Nav() {
  const [navMenu, setNavMenu] = useState(false)

  const handleMenuBtn = () => {
    navMenu === false ? setNavMenu(true) : setNavMenu(false)
  }

  return (
    <nav className="flex justify-center items-center h-16 w-full p-4 bg-clr_primary">
      <h1 className="text-clr_dark font-bold text-3xl mr-auto font-robotoSlab z-40">
        <Link href={"/"}>Little John's</Link>
      </h1>
      <button
        type="button"
        onClick={() => handleMenuBtn()}
        className="[&>svg]:size-8 [&>svg]:w-auto"
      >
        <IoMenu />
      </button>
      {/* Nav Menu */}
      <div
        className={`${
          navMenu === false ? "hidden" : "flex"
        } absolute top-16 flex flex-col items-start justify-start bg-clr_light`}
      >
        <Image
          src={
            "https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg"
          }
          width={400}
          height={400}
          alt={"City background by Pixabay, Pexels.com"}
          aria-description="A modern city landscape in day-time as photographed from the water surrounding it."
          className="object-cover object-center w-screen h-32"
        />
        <ul className="text-clr_secondary p-4 [&>li]:mb-4 text-lg">
          <li>
            <Link href={"/"} onClick={() => handleMenuBtn()}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/"} onClick={() => handleMenuBtn()}>
              Track Your Order
            </Link>
          </li>
          <li>
            <Link href={"/"} onClick={() => handleMenuBtn()}>
              Our Restaurants
            </Link>
          </li>
          <li>
            <Link href={"/"} onClick={() => handleMenuBtn()}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link href={"/login"} onClick={() => handleMenuBtn()}>
              Sign In
            </Link>
          </li>
          <li>
            <Link href={"/register"} onClick={() => handleMenuBtn()}>
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
