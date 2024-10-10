import Link from "next/link"
import { FaQuestion } from "react-icons/fa6"

export default function NotFound() {
  return (
    <section>
      <div className="bg-clr_secondary p-4 m-4 rounded flex flex-col items-center justify-center [&>svg]:m-4 [&>svg]:size-6">
        <h2 className="text-center text-2xl font-medium font-robotoSlab">
          Not Found
        </h2>
        <FaQuestion />
        <p className="text-balance text-center text-sm">
          Could not find the requested Page
        </p>
        <Link
          href={"/"}
          className="mt-4 text-2xl bg-clr_primary p-2 rounded border-[2px] border-clr_primary hover:border-foreground"
        >
          Return Home
        </Link>
      </div>
    </section>
  )
}
