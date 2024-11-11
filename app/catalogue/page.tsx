"use client"

import Image, { StaticImageData } from "next/image"
import Header from "./components/Header"
import notFoundImg from "@/public/notfound.jpg"
import { useState } from "react"

export default function page() {
  // temp menu data //
  const menuData = [
    {
      menuTitle: "Deals and Offers",
      menuItems: [
        {
          itemShow: true,
          itemName: "Peri Peri Platter",
          itemCode: "PP Platter",
          itemDescription:
            "2x Peri Peri Full Chicken + 2x Mixed Salad + 2x Side Orders + 2x Regular Chips + 1x Large Bottle of Drink",
          itemCostPence: 3099,
          itemImgUrl:
            "https://bjaquinton.mybigjohns.com/imagerescalingservice.axd?ImageID=3b6ea555-e9b3-41c9-8663-2d15a8c4146f_400",
        },
        {
          itemShow: true,
          itemName: "Wings Platter",
          itemCode: "Wings Platter",
          itemDescription:
            "1x 10 Peri Peri Wings + 6x Hot Wings + 2x Regular Chips OR Side Orders + 2x Small Drinks",
          itemCostPence: 1499,
          itemImgUrl:
            "https://bjaquinton.mybigjohns.com/imagerescalingservice.axd?ImageID=bdfa80cb-45c4-4466-b4e9-2554c86b29aa_400",
        },
        {
          itemShow: true,
          itemName: "Just The Two Of Us Deal",
          itemCode: "JT2OU M/DEAL",
          itemDescription:
            "Any 2x Pitta Kebabs (Chicken, Lamb OR Mixed) + 1x Large Chips + 1x Ben & Jerry's Ice Cream (465ml) + 2x Small Drinks",
          itemCostPence: 1899,
          itemImgUrl:
            "https://bjaquinton.mybigjohns.com/imagerescalingservice.axd?ImageID=9b5cee58-6cec-4248-a9be-d4ff00a49ebd_400",
        },
        {
          itemShow: true,
          itemName: "All By Myself Deal",
          itemCode: "ABM M/DEAL",
          itemDescription:
            '1x 9" Build Your Own Pizza + 1x Side Order + 1x Ben & Jerrys Ice Cream (100ml) + 1x Small Drink',
          itemCostPence: 1099,
          itemImgUrl:
            "https://bjaquinton.mybigjohns.com/imagerescalingservice.axd?ImageID=2ee5aebf-f645-428b-8bbb-d868daea5c6f_400",
        },
      ],
    },
  ]

  return (
    <main className="bg-clr_background flex flex-col justify-start items-start">
      <Header />
      <section className="bg-clr_background p-4">
        <div>
          <h3 className="text-clr_secondary font-medium">Allergens</h3>
          <p className="text-clr_secondary font-light pt-2">
            If you have a food allergy or intolerance that may harm your health
            please contact us directly before placing your order.
            <br />
            (V) indicates dishes suitable for vegetarians, and (Vg) indicates
            dishes suitable for vegans.
          </p>
        </div>
        <div className="flex items-center justify-center mt-4 max-w-[768px]">
          {!menuData ? (
            <p>No menu data found!</p>
          ) : menuData ? (
            menuData.map((menuItem) => (
              <div key={menuItem.menuTitle}>
                <h3 className="text-clr_secondary font-medium">
                  {menuItem.menuTitle}
                </h3>
                <ul className="grid gap-2 grid-cols-1 lg:grid-cols-2">
                  {menuItem.menuItems !== null ? (
                    menuItem.menuItems.map((item) => {
                      const [imgSrc, setImgSrc] = useState<
                        String | StaticImageData
                      >(item.itemImgUrl)

                      return (
                        <li
                          key={item.itemCode}
                          className="flex bg-clr_light w-full h-[100px]"
                        >
                          <div className="bg-clr_primary w-1/3">
                            <Image
                              src={`${imgSrc}`}
                              alt={`${item.itemName}`}
                              width={600}
                              height={600}
                              onError={() => setImgSrc(notFoundImg)}
                              className="h-full w-full object-cover object-center aspect-square"
                            />
                          </div>
                          <div className="w-2/3 text-clr_secondary flex flex-col">
                            <h4>{item.itemName}</h4>
                            <p className="text-xs font-light text-ellipsis overflow-hidden">
                              {item.itemDescription}
                            </p>
                            <div className="flex justify-between items-center m-1 font-medium">
                              <span>
                                {`£${item.itemCostPence
                                  .toString()
                                  .slice(0, 2)}` || item.itemCode}
                              </span>
                              <button className="pr-2 pl-2 rounded-lg text-clr_light  bg-clr_secondary">
                                Order
                              </button>
                            </div>
                          </div>
                        </li>
                      )
                    })
                  ) : (
                    <p>No menu items found</p>
                  )}
                </ul>
              </div>
            ))
          ) : (
            <p>There was an error!</p>
          )}
        </div>
      </section>
    </main>
  )
}
