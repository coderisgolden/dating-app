import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

type Props = {
  open: boolean
  name: string
  image: string
  loading: boolean
  error: string | null
  onClose: () => void
  onStartChat: () => void
}

export default function MatchModal({
  open,
  name,
  image,
  loading,
  error,
  onClose,
  onStartChat,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-sm text-center p-8 space-y-4">
        <h2 className="text-3xl font-bold">It’s a match!</h2>

        <div className="flex justify-center">
          <img
            src={image}
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>

        <p className="text-gray-600">
          You and {name} liked each other
        </p>

        {loading && <p className="text-sm">Creating chat…</p>}
        {error && <p className="text-sm text-red-500">{error}</p>}

        <div className="flex gap-3 pt-2">
          <Button variant="outline" className="flex-1" onClick={onClose}>
            Keep swiping
          </Button>

          <Button
            className="flex-1"
            disabled={loading}
            onClick={onStartChat}
          >
            Start Chat
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
