import AccountAddress from "./components/AccountAddress"
import AccountDefaultStore from "./components/AccountDefaultStore"
import AccountDetails from "./components/AccountDetails"
import AccountLinks from "./components/AccountLinks"
import AccountLoyalty from "./components/AccountLoyalty"
import AccountPassword from "./components/AccountPassword"
import AccountWallet from "./components/AccountWallet"

export default function accountPage() {
  return (
    <main className="bg-clr_background p-4 flex flex-col justify-start items-center">
      <AccountLinks />
      <AccountDetails />
      <AccountPassword />
      <AccountAddress />
      <AccountWallet />
      <AccountLoyalty />
      <AccountDefaultStore />
    </main>
  )
}
