import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-10">
            <Link to="/" className="text-xl font-bold text-brand-500">
              HeartMatch
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/discover">Discover</NavLink>
              <NavLink to="/matches">Matches</NavLink>
              <NavLink to="/profile">Profile</NavLink>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
            <Button size="sm" className="rounded-full">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-sm font-medium text-gray-600 hover:text-brand-500 transition-colors"
    >
      {children}
    </Link>
  )
}