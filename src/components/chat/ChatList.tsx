import ChatRow from "./ChatRow"

const MOCK_CHATS = [
  {
    id: "1",
    name: "Emma",
    lastMessage: "That sounds amazing 😍",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    id: "2",
    name: "Sofia",
    lastMessage: "When are you free?",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop",
  },
]

export default function ChatList() {
  return (
    <div className="space-y-3">
      {MOCK_CHATS.map((chat) => (
        <ChatRow key={chat.id} {...chat} />
      ))}
    </div>
  )
}
