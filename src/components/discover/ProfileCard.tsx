import { Button } from "@/components/ui/button"

type Props = {
  name: string
  age: number
  location: string
  bio: string
  image: string | null
  interests: string[]
  onLike: () => void
  onPass: () => void
  onOpenProfile?: () => void
}

export default function ProfileCard({
  name,
  age,
  location,
  bio,
  image,
  interests,
  onLike,
  onPass,
  onOpenProfile,
}: Props) {
  return (
    <div
      className="w-[360px] max-w-full bg-white rounded-3xl shadow-xl overflow-hidden select-none"
      onClick={onOpenProfile}
    >
      <div className="relative">
        <div onClick={onOpenProfile} className="cursor-pointer">
        {image ? (
          <img
            src={image}
            className="w-full h-[420px] object-cover"
            draggable={false}
          />
        ) : (
          <div className="w-full h-[420px] bg-gray-200 flex items-center justify-center text-gray-500">
            No image
          </div>
        )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <h2 className="text-2xl font-bold text-white">
            {name}, {age}
          </h2>
          <p className="text-white/80 text-sm">{location}</p>
        </div>
      </div>

      <div className="p-5 space-y-3">
        <p className="text-sm text-gray-600">{bio}</p>

        <div className="flex flex-wrap gap-2">
          {interests.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation()
              onPass()
            }}
          >
            Pass
          </Button>

          <Button
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation()
              onLike()
            }}
          >
            Like
          </Button>
        </div>
      </div>
    </div>
  )
}
