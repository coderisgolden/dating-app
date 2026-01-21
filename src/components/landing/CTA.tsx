import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function CTA() {
  return (
    <section className="w-full bg-gradient-to-br from-brand-500 to-brand-600 py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Find Your Soulmate?
        </h2>

        <p className="text-xl text-brand-100 mb-12">
          Join HeartMatch today and start your journey towards lasting love. Your perfect match is just a click away.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white text-brand-600 hover:bg-brand-50"
          >
            <Link to="/signup">Create Free Account</Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white text-white hover:bg-white hover:text-brand-600"
          >
            <Link to="/learn-more">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
