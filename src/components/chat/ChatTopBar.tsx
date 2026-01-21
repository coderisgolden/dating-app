import { useNavigate } from "react-router-dom"

type Props = {
  name: string
  image: string
}

export default function ChatTopBar({ name, image }: Props) {
  const navigate = useNavigate()

  return (
    <div className="flex items-center gap-4 p-4 border-b bg-white sticky top-0 z-10">
      <button
        onClick={() => navigate(-1)}
        className="text-xl"
      >
        ←
      </button>

      <img
        src={image}
        alt={name}
        className="w-10 h-10 rounded-full object-cover"
      />

      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-xs text-green-500">Online</p>
      </div>
    </div>
  )
}
