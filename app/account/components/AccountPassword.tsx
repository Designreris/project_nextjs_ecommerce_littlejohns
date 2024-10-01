import { FaThumbsUp } from "react-icons/fa"

export default function AccountPassword() {
  return (
    <section
      id="changePassword"
      className="bg-clr_light w-full p-4 mt-2 mb-2 rounded flex flex-col items-center justify-center sm:justify-start sm:max-w-[768px]"
    >
      <h1 className="text-clr_secondary text-2xl text-center font-robotoSlab mt-2 mb-4">
        Change Password
      </h1>
      <form className="flex flex-col items-center justify-center w-full">
        <div className="relative text-clr_secondary [&>label]:text-sm flex flex-col text-start self-start border-b-2 border-clr_gray mb-4 w-full">
          <label htmlFor="oldPassword">Current Password</label>
          <input
            type="password"
            name="oldPassword"
            id="oldPassword"
            className="p-2 rounded mb-2 text-st text-clr_dark font-medium"
            required
          />
        </div>
        <div className="relative text-clr_secondary [&>label]:text-sm flex flex-col text-start self-start border-b-2 border-clr_gray mb-4 w-full">
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            className="p-2 rounded mb-2 text-st text-clr_dark font-medium"
            required
          />
        </div>
        <div className="relative text-clr_secondary [&>label]:text-sm flex flex-col text-start self-start border-b-2 border-clr_gray mb-4 w-full">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="p-2 rounded mb-2 text-st text-clr_dark font-medium"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-clr_secondary flex items-center justify-center p-4 rounded [&>svg]:size-6 [&>svg]:mr-2 font-medium"
        >
          <FaThumbsUp />
          Save Password
        </button>
      </form>
    </section>
  )
}
