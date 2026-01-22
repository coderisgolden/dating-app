import { Button } from "@/components/ui/button"

type Props = {
  onLike: () => void
  onPass: () => void
}

export default function ProfileActions({ onLike, onPass }: Props) {
  return (
    <div className="p-5 pt-0 flex gap-3">
      <Button
        variant="outline"
        className="flex-1"
        onClick={(e) => {
          e.stopPropagation()
          onPass()
        }}
      >
        Pass
      </Button>

      <Button
        className="flex-1"
        onClick={(e) => {
          e.stopPropagation()
          onLike()
        }}
      >
        Like
      </Button>
    </div>
  )
}
