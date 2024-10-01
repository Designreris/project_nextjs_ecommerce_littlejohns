import AccountAddress from "./components/AccountAddress"
import AccountDetails from "./components/AccountDetails"
import AccountLinks from "./components/AccountLinks"
import AccountPassword from "./components/AccountPassword"

export default function accountPage() {
  return (
    <main className="bg-clr_background p-4 flex flex-col justify-start items-center">
      <AccountLinks />
      <AccountDetails />
      <AccountPassword />
      <AccountAddress />
    </main>
  )
}
