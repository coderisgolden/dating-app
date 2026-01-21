import { useState } from "react"
import { Button } from "@/components/ui/button"
import EmojiPicker from "emoji-picker-react"

type Props = {
  onSend: (text: string) => void
}

export default function ChatInput({ onSend }: Props) {
  const [text, setText] = useState("")
  const [showEmoji, setShowEmoji] = useState(false)

  const handleSend = () => {
    if (!text.trim()) return
    onSend(text)
    setText("")
  }

  return (
    <div className="relative p-4 border-t flex gap-2 items-center">
      {/* Emoji picker */}
      {showEmoji && (
        <div className="absolute bottom-16 left-4 z-50">
          <EmojiPicker
            onEmojiClick={(emojiData) => {
              setText((prev) => prev + emojiData.emoji)
            }}
          />
        </div>
      )}

      <button
        onClick={() => setShowEmoji((prev) => !prev)}
        className="text-2xl"
      >
        😊
      </button>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 px-4 py-3 rounded-full border focus:outline-none"
      />

      <Button onClick={handleSend}>Send</Button>
    </div>
  )
}
