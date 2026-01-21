import DiscoverFeed from "@/components/discover/DiscoverFeed"

export default function Discover() {
  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-10">
          Discover
        </h1>

        <DiscoverFeed />
      </div>
    </div>
  )
}
