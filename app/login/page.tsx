import Link from "next/link"

export default function loginPage() {
  return (
    <main className="bg-clr_background p-4">
      <form className="bg-clr_light">
        <h1 className="text-clr_accent">Login</h1>
        <input type="text" id="username" required />
        <input type="password" id="password" />
        <Link href={"/register"}>Register</Link>
        <button type="submit">Login</button>
      </form>
    </main>
  )
}
