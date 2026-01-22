const fallback = "/placeholder-avatar.jpg"

export default function ProfileImage({ src }: { src: string | null }) {
  return (
    <img
      src={src || fallback}
      className="w-full h-[420px] object-cover"
      draggable={false}
    />
  )
}
