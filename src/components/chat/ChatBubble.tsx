type Props = {
  text: string
  fromMe: boolean
  time?: string
}

export default function ChatBubble({ text, fromMe, time }: Props) {
  return (
    <div
      className={`max-w-xs px-4 py-3 rounded-2xl text-sm flex flex-col gap-1 ${
        fromMe
          ? "ml-auto bg-brand-500 text-white"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <span>{text}</span>
      {time && (
        <span className="text-[10px] opacity-70 text-right">
          {time}
        </span>
      )}
    </div>
  )
}
