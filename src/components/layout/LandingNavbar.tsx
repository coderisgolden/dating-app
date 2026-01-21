import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function LandingNavbar() {
  return (
    <nav className="w-full absolute top-0 left-0 z-50">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-brand-500">
              HeartMatch
            </Link>

            {/* Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
              <a href="#how-it-works" className="hover:text-brand-500 transition">
                How it works
              </a>
              <a href="#features" className="hover:text-brand-500 transition">
                Features
              </a>
              <a href="#testimonials" className="hover:text-brand-500 transition">
                Stories
              </a>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                Sign in
              </Button>
              <Button size="sm" className="rounded-full bg-brand-500 hover:bg-brand-600">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
