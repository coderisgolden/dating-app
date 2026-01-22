import { Button } from "@/components/ui/button"
import { Send, Share2 } from "lucide-react"

type Props = {
  headline: string
  subtext: string
  onSendMessage?: () => void
  onShare?: () => void
}

export default function ProfileCTA({
  headline,
  subtext,
  onSendMessage,
  onShare,
}: Props) {
  return (
    <div className="bg-gradient-to-r from-brand-500 to-brand-600 rounded-3xl shadow-xl p-8 text-center">
      <h2 className="text-3xl font-bold text-white mb-3">
        {headline}
      </h2>

      <p className="text-brand-100 mb-6 text-lg">
        {subtext}
      </p>

      <div className="flex gap-4 justify-center flex-wrap">
        <Button
          onClick={onSendMessage}
          className="bg-white text-brand-600 hover:bg-brand-50 rounded-full px-8 py-6 text-lg font-semibold shadow-lg"
        >
          <Send className="w-5 h-5 mr-2" />
          Send Message
        </Button>

        <Button
          onClick={onShare}
          variant="outline"
          className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold"
        >
          <Share2 className="w-5 h-5 mr-2" />
          Share Profile
        </Button>
      </div>
    </div>
  )
}
