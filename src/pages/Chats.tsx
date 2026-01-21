import ChatList from "@/components/chat/ChatList"

export default function Chats() {
  return (
    <div className="w-full py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Messages</h1>
        <ChatList />
      </div>
    </div>
  )
}
