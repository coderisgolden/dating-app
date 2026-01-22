import { Sparkles } from "lucide-react"

type Props = {
  paragraphs: string[]
}

export default function ProfileAbout({ paragraphs }: Props) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
        <Sparkles className="w-6 h-6 mr-2 text-brand-500" />
        About Me
      </h2>

      <div className="space-y-4">
        {paragraphs.map((text, i) => (
          <p
            key={i}
            className="text-base text-gray-700 leading-relaxed"
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  )
}
