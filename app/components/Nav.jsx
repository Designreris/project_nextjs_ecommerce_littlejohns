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
      <h1 className="text-clr_dark font-bold text-2xl mr-auto font-robotoSlab">
        Little John's
      </h1>
      <button type="button" onClick={() => handleMenuBtn()}>
        <IoMenu />
      </button>
      <div className={`${navMenu === false ? "hidden" : "flex"} absolute`}>
        <Image
          src={
            "https://images.pexels.com/photos/11122354/pexels-photo-11122354.jpeg"
          }
          width={400}
          height={400}
          alt={"City background by Kate Branch, Pexels.com"}
        />
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Track Your Order</Link>
          </li>
          <li>
            <Link href={"/"}>Our Restaurants</Link>
          </li>
          <li>
            <Link href={"/"}>Contact Us</Link>
          </li>
          <li>
            <Link href={"/"}>Sign In</Link>
          </li>
          <li>
            <Link href={"/"}>Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
