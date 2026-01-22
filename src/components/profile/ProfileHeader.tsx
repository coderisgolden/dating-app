import { Button } from "@/components/ui/button"
import { Heart, MessageCircle } from "lucide-react"

type Props = {
  name: string
  age: number
  location: string
  avatar: string | null
  tags: string[]
  onLike?: () => void
  onMessage?: () => void
}

export default function ProfileHeader({
  name,
  age,
  location,
  avatar,
  tags,
  onLike,
  onMessage,
}: Props) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 mb-6">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="relative">
          {avatar && (
            <img
              src={avatar}
              alt={name}
              className="w-40 h-40 rounded-full object-cover shadow-xl ring-4 ring-brand-200"
            />
          )}
          <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full ring-4 ring-white" />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {name}
          </h1>

          <p className="text-lg text-brand-600 mb-3">
            {age} • {location}
          </p>

          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-brand-100 text-brand-700 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3 justify-center md:justify-start">
            <Button
              onClick={onLike}
              className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white rounded-full px-6 shadow-lg"
            >
              <Heart className="w-4 h-4 mr-2" />
              Like Profile
            </Button>

            <Button
              onClick={onMessage}
              variant="outline"
              className="border-brand-300 text-brand-700 hover:bg-brand-50 rounded-full px-6"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
