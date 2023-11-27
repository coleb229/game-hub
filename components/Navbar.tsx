import { ModeToggle } from "@/components/DayNightThemeToggle"

export const Navbar = () => {
  return(
    <nav className="flex justify-evenly">
      <a href="#" className="text-2xl">Home</a>
      <a href="#" className="text-2xl">About</a>
      <a href="#" className="text-2xl">Contact</a>
      <ModeToggle />
    </nav>
  )
}