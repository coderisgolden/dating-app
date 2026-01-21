import { motion, useMotionValue, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"

type Props = {
  name: string
  age: number
  location: string
  bio: string
  image: string
  interests: string[]
  onLike: () => void
  onPass: () => void
}

export default function ProfileCard({
  name,
  age,
  location,
  bio,
  image,
  interests,
  onLike,
  onPass,
}: Props) {
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 0, 200], [-12, 0, 12])
  const likeOpacity = useTransform(x, [0, 120], [0, 1])
  const nopeOpacity = useTransform(x, [-120, 0], [1, 0])

  const handleDragEnd = (_: any, info: any) => {
    const { offset, velocity } = info
    if (offset.x > 120 || velocity.x > 500) onLike()
    else if (offset.x < -120 || velocity.x < -500) onPass()
  }

  return (
    <motion.div
      className="w-[360px] max-w-full bg-white rounded-3xl shadow-xl overflow-hidden cursor-grab active:cursor-grabbing select-none"
      style={{ x, rotate }}
      drag="x"
      dragConstraints={{ left: -250, right: 250 }}
      onDragEnd={handleDragEnd}
      whileTap={{ scale: 1.02 }}
    >
      <div className="relative">
        <img src={image} className="w-full h-[420px] object-cover" />

        {/* Overlays */}
        <motion.div
          className="absolute top-6 left-6 border-4 border-green-400 text-green-400 px-3 py-1 rounded-lg font-bold text-xl"
          style={{ opacity: likeOpacity }}
        >
          LIKE
        </motion.div>

        <motion.div
          className="absolute top-6 right-6 border-4 border-red-400 text-red-400 px-3 py-1 rounded-lg font-bold text-xl"
          style={{ opacity: nopeOpacity }}
        >
          NOPE
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <h2 className="text-2xl font-bold text-white">
            {name}, {age}
          </h2>
          <p className="text-white/80 text-sm">{location}</p>
        </div>
      </div>

      <div className="p-5 space-y-3">
        <p className="text-sm text-gray-600">{bio}</p>

        <div className="flex flex-wrap gap-2">
          {interests.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-3">
          <Button variant="outline" className="flex-1" onClick={onPass}>
            Pass
          </Button>
          <Button className="flex-1" onClick={onLike}>
            Like
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
