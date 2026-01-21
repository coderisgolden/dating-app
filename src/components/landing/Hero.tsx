import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-brand-50 via-white to-brand-100 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              <span>Find Your </span>
              <span className="text-brand-500">Perfect Match</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Join millions of singles who have found love on HeartMatch. Our intelligent matching system connects you with compatible partners who share your values and interests.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-14 rounded-full px-6"
              />
              <Button className="h-14 rounded-full px-8 text-base bg-brand-500 hover:bg-brand-600">
                Get Started
              </Button>
            </div>

            <div className="flex items-center gap-10 pt-6">
              <Stat value="2M+" label="Active Users" />
              <Stat value="150K+" label="Couples Matched" />
              <Stat value="98%" label="Satisfaction" />
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=900&fit=crop"
              alt="Happy couple"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />

            <div className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
                  ❤️
                </div>
                <div>
                  <p className="font-semibold text-gray-800">It's a Match!</p>
                  <p className="text-sm text-gray-500">Sarah & Michael</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-bold text-brand-500">{value}</p>
      <p className="text-gray-500 text-sm">{label}</p>
    </div>
  )
}
