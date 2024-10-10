"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { IoMenu } from "react-icons/io5"

export default function Nav() {
  const [navMenu, setNavMenu] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const navData = [
    { key: 1, link: "/", name: "Home", logEvent: null },
    { key: 2, link: "/", name: "Track Your Order", logEvent: null },
    { key: 3, link: "/", name: "Our Restaurants", logEvent: null },
    { key: 4, link: "/", name: "Contact Us", logEvent: null },
    { key: 5, link: "/login", name: "Sign In", logEvent: false },
    { key: 6, link: "/register", name: "Register", logEvent: false },
    { key: 7, link: "/", name: "Logout", logEvent: true },
    { key: 8, link: "/account", name: "My Account", logEvent: true },
  ]

  const handleMenuBtn = () => {
    navMenu === false ? setNavMenu(true) : setNavMenu(false)
  }

  return (
    <nav className="flex justify-center items-center h-16 w-full p-4 bg-clr_primary z-50">
      <h1 className="text-clr_dark font-bold text-3xl mr-auto font-robotoSlab">
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
        } absolute top-16 flex flex-col items-start justify-start bg-clr_light z-40`}
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
          {navData.map((item) => {
            return (
              <li
                key={item.key}
                className={`${
                  isLoggedIn === false && item.logEvent === true && "hidden"
                } ${
                  isLoggedIn === true && item.logEvent === false && "hidden"
                }`}
              >
                <Link
                  href={item.link}
                  onClick={() => handleMenuBtn()}
                  className="hover:text-clr_background"
                >
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
