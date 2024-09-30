import AccountDetails from "./components/AccountDetails"
import AccountLinks from "./components/AccountLinks"

export default function accountPage() {
  return (
    <main className="bg-clr_background p-4">
      <AccountLinks />
      <AccountDetails />
    </main>
  )
}
