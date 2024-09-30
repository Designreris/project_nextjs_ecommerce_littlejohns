import Link from "next/link"

export default function AccountLinks() {
  const linkData = [
    { key: 1, link: "/account#details", name: "Details" },
    { key: 2, link: "/account#changePassword", name: "Change Password" },
    { key: 3, link: "/account#address", name: "Address Book" },
    { key: 4, link: "/account#wallet", name: "My Wallet" },
    { key: 5, link: "/account#loyalty", name: "Loyalty" },
    { key: 6, link: "/account#storeDefault", name: "Default Store" },
  ]

  return (
    <section className="mt-2 mb-2">
      <ul className="grid grid-cols-2 gap-4">
        {linkData.map((item) => {
          return (
            <li key={item.key} className="flex items-center justify-center">
              <Link
                href={item.link}
                className="bg-clr_primary p-2 rounded text-center text-sm font-medium grow h-full hover:bg-clr_secondary"
              >
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
