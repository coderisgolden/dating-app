import { Link } from "react-router-dom"

type Props = {
  id: string
  name: string
  lastMessage: string
  image: string
}

export default function ChatRow({ id, name, lastMessage, image }: Props) {
  return (
    <Link
      to={`/chats/${id}`}
      className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition"
    >
      <img
        src={image}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />

      <div className="flex-1">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500 truncate">{lastMessage}</p>
      </div>
    </Link>
  )
}
