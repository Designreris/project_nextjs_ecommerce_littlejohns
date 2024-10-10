"use client"
import {
  FaCreditCard,
  FaMoneyBillWave,
  FaQrcode,
  FaWallet,
} from "react-icons/fa"

export default function AccountLoyalty() {
  const loyaltyBalance = 0

  return (
    <section
      id="loyalty"
      className="bg-clr_light w-full p-4 mt-2 mb-2 rounded flex flex-col items-center justify-center sm:justify-start  sm:max-w-[768px]"
    >
      <h1 className="text-clr_secondary text-2xl text-center font-robotoSlab mt-2 mb-4">
        Loyalty
      </h1>
      <p className="text-clr_secondary text-sm text-balance text-center font-medium">
        Your reward points balance
      </p>
      <h2 className="text-clr_secondary text-sm text-balance text-center font-medium">
        <span className="text-3xl">{loyaltyBalance}</span>
        {" points"}
      </h2>
      <button className="text-clr_light bg-clr_primary flex items-center justify-center p-4 rounded [&>svg]:mr-2 [&>svg]:size-5 m-2 w-full max-w-[260px]">
        <FaCreditCard />
        View Transactions
      </button>
      <button className="text-clr_light bg-clr_primary flex items-center justify-center p-4 rounded [&>svg]:mr-2 [&>svg]:size-5 m-2 w-full max-w-[260px]">
        <FaQrcode />
        View Your QR Code
      </button>
      <button className="text-clr_light bg-clr_primary flex items-center justify-center p-4 rounded [&>svg]:mr-2 [&>svg]:size-5 m-2 w-full max-w-[260px]">
        <FaWallet />
        View Voucher Wallet
      </button>
      <button className="text-clr_light bg-clr_primary flex items-center justify-center p-4 rounded [&>svg]:mr-2 [&>svg]:size-5 m-2 w-full max-w-[260px]">
        <FaMoneyBillWave />
        Convert To Voucher
      </button>
      <div className="display_area border-t-2">
        @TODO: display user loyalty data
      </div>
    </section>
  )
}
