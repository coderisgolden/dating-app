import { Camera } from "lucide-react"

type Props = {
  photos: string[]
  onPhotoClick?: (url: string) => void
}

export default function ProfileGallery({ photos, onPhotoClick }: Props) {
  if (!photos.length) return null

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
        <Camera className="w-6 h-6 mr-2 text-brand-500" />
        Photos
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Gallery ${i + 1}`}
            onClick={() => onPhotoClick?.(src)}
            className="w-full h-48 object-cover rounded-2xl shadow-md hover:shadow-xl transition-shadow cursor-pointer"
          />
        ))}
      </div>
    </div>
  )
}
