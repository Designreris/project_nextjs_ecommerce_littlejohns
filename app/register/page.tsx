import Link from "next/link"
import { FaUserCircle } from "react-icons/fa"
import { FaAngleRight, FaCheck, FaLock } from "react-icons/fa6"

export default function registerPage() {
  return (
    <main className="bg-clr_background p-4">
      <form className="bg-clr_light rounded flex flex-col overflow-hidden justify-center items-center min-h-svh">
        <h1 className="text-clr_accent text-3xl text-center pb-2 pt-16 mb-auto">
          Register
        </h1>
        <p className="text-clr_accent text-xl font-light text-center max-w-[24ch] p-2 mb-auto">
          Enter your email address and password to create an account.
        </p>
        <span className="flex items-center justify-center bg-clr_gray rounded mb-2 w-auto sm:w-1/2">
          <input
            type="email"
            id="username"
            placeholder="Email"
            required
            className="relative w-full p-2 m-1 text-clr_accent font-medium bg-clr_gray"
          />
          <FaUserCircle className="text-clr_dark size-6 mr-1" />
        </span>
        <span className="flex items-center justify-center bg-clr_gray rounded mb-2 w-auto sm:w-1/2">
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            className="relative w-full p-2 m-1 text-clr_accent font-medium bg-clr_gray"
          />
          <FaLock className="text-clr_dark size-6 mr-1" />
        </span>
        <span className="flex items-center justify-center bg-clr_gray rounded w-auto sm:w-1/2">
          <input
            type="password"
            id="passwordConfirm"
            placeholder="Confirm Password"
            required
            className="relative w-full p-2 m-1 text-clr_accent font-medium bg-clr_gray"
          />
          <FaLock className="text-clr_dark size-6 mr-1" />
        </span>
        <Link
          href={"/login"}
          className="mt-auto flex items-center justify-between w-full sm:w-1/2  bg-clr_accent p-2 sm:rounded font-medium"
        >
          <FaUserCircle className="text-clr_light size-6" />
          Login
          <FaAngleRight className="text-clr_light size-6" />
        </Link>
        <button
          type="submit"
          className="flex items-center justify-between w-full sm:w-1/2 bg-clr_secondary p-2 sm:mt-2 sm:mb-8 sm:rounded font-medium"
        >
          <FaCheck className="text-clr_light size-6" />
          Register
          <FaAngleRight className="text-clr_light size-6" />
        </button>
      </form>
      <p className="text-sm font-light text-clr_secondary text-center text-balance p-2 [&>a]:font-medium">
        By Registering you agree to our{" "}
        <Link href={"conditions"}>Terms And Conditions</Link> and{" "}
        <Link href={"conditions"}>Privacy Policy</Link>
      </p>
    </main>
  )
}
