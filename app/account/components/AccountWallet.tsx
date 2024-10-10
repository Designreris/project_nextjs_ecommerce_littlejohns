import WalletAccordian from "./WalletAccordian"
import WalletDialog from "./WalletDialog"

export default function AccountWallet() {
  const walletData = [
    {
      id: "3047fd00gd088",
      cardNo: 1234567890123456,
      expire: "2028-01-01",
      code: 123,
      name: "John Doe",
    },
    {
      id: "3023fj88hs93k0",
      cardNo: 1234567896543210,
      expire: "2028-01-01",
      code: 123,
      name: "Jane Doe",
    },
  ]

  return (
    <section
      id="wallet"
      className="bg-clr_light w-full p-4 mt-2 mb-2 rounded flex flex-col items-center justify-center sm:justify-start  sm:max-w-[768px]"
    >
      <h1 className="text-clr_secondary text-2xl text-center font-robotoSlab mt-2 mb-4">
        My Wallet
      </h1>
      {walletData !== null ? (
        walletData.map((card) => <WalletAccordian key={card.id} data={card} />)
      ) : (
        <p>No cards in your wallet </p>
      )}
      <WalletDialog />
    </section>
  )
}
