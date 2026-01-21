import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import ChatBubble from "./ChatBubble"
import ChatInput from "./ChatInput"
import ChatTopBar from "./ChatTopBar"
import { supabase } from "@/lib/supabase"

type Message = {
  id: string
  text: string
  sender_id: string
  created_at: string
}

export default function ChatWindow() {
  const { id: chatId } = useParams()
  const [messages, setMessages] = useState<Message[]>([])
  const bottomRef = useRef<HTMLDivElement | null>(null)

  // TEMP: fake user id (ersätts med riktig auth senare)
  const myUserId = "demo-user-1"

  // Hämta historik
  useEffect(() => {
    if (!chatId) return

    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .eq("chat_id", chatId)
        .order("created_at", { ascending: true })

      if (!error && data) {
        setMessages(data)
      }
    }

    fetchMessages()
  }, [chatId])

  // Realtime subscription
  useEffect(() => {
    if (!chatId) return

    const channel = supabase
      .channel("chat-room")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `chat_id=eq.${chatId}`,
        },
        (payload) => {
          setMessages((prev) => [...prev, payload.new as Message])
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [chatId])

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const sendMessage = async (text: string) => {
    if (!chatId) return

    await supabase.from("messages").insert([
      {
        chat_id: chatId,
        sender_id: myUserId,
        text,
      },
    ])
  }

  return (
    <div className="flex flex-col h-full">
      <ChatTopBar
        name="Emma"
        image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
      />

      <div className="flex-1 p-6 space-y-3 overflow-y-auto">
        {messages.map((msg) => (
          <ChatBubble
            key={msg.id}
            text={msg.text}
            fromMe={msg.sender_id === myUserId}
            time={new Date(msg.created_at).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          />
        ))}

        <div ref={bottomRef} />
      </div>

      <ChatInput onSend={sendMessage} />
    </div>
  )
}
