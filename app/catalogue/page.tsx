"use client"

import Link from "next/link"
import { useState } from "react"
import { IoCartOutline, IoMenuOutline } from "react-icons/io5"

export default function page() {
  const [basketNum, setBasketNum] = useState(0)
  const [showMenu, setShowMenu] = useState(false)

  // Temp Data //
  const headerMenuData = [
    "Deals And Offers",
    "Build Your Own",
    "Classic Pizzas",
    "Fish & Chips",
    "Big Flavour Burgers",
    "Kebabs",
    "Southern Fried Chicken",
    "Peri-Peri Chicken",
    "Wraps",
    "Panini",
    "Side Orders",
    "Cheeky Munchies & Daily Deals",
    "Sauces",
    "Desserts",
    "Cold Drinks",
  ]

  // Event Handlers //
  const handleMenuBtn = () => {
    if (showMenu === false) {
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }
  }

  const handleBasketBtn = () => {
    console.log("Handle basket clicked!")
  }

  return (
    <main className="bg-clr_background flex flex-col justify-start items-start">
      {/* Header */}
      <header className="bg-clr_light relative w-full h-[50px] flex justify-between items-center">
        <div
          className={`${
            showMenu === true ? "text-clr_background" : "text-clr_dark"
          } flex items-center justify-center ml-4 hover:cursor-pointer hover:text-clr_background`}
          onClick={() => handleMenuBtn()}
        >
          <IoMenuOutline className="mr-2 size-6" />
          Menu
        </div>
        <div
          className="flex flex-col items-center justify-center mr-4  text-clr_dark hover:cursor-pointer hover:text-clr_background"
          onClick={() => handleBasketBtn()}
        >
          <span className="text-xl translate-x-0.5">{basketNum}</span>
          <IoCartOutline className="size-6 -translate-y-2" />
        </div>
        <ul
          className={`${
            showMenu === true ? "grid" : "hidden"
          } absolute top-[50px] text-balance text-center w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 bg-clr_secondary`}
        >
          {headerMenuData !== null ? (
            headerMenuData.map((item) => (
              <li key={item} className="m-2">
                <Link
                  href={`#${item}`}
                  onClick={() => handleMenuBtn()}
                  className="w-full hover:text-clr_background"
                >
                  {item}
                </Link>
              </li>
            ))
          ) : (
            <li>No menu data found!</li>
          )}
        </ul>
      </header>
    </main>
  )
}
