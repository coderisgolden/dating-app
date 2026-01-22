import { motion, useMotionValue, useTransform } from "framer-motion"
import ProfileCardView from "./ProfileCardView"

type Props = {
  name: string
  age: number
  location: string
  bio: string
  image: string | null

  interests: string[]
  onLike: () => void
  onPass: () => void

  onOpenProfile?: () => void
}

export default function ProfileCard(props: Props) {
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 0, 200], [-12, 0, 12])
  const likeOpacity = useTransform(x, [0, 120], [0, 1])
  const nopeOpacity = useTransform(x, [-120, 0], [1, 0])
  
  

  const handleDragEnd = (_: any, info: any) => {
    const { offset, velocity } = info

    if (offset.x > 120 || velocity.x > 500) {
      props.onLike()
    } else if (offset.x < -120 || velocity.x < -500) {
      props.onPass()
    }
  }

  return (
    <motion.div
      className="w-[360px] max-w-full cursor-grab active:cursor-grabbing select-none"
      style={{ x, rotate }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.4}
      onDragEnd={handleDragEnd}
      whileTap={{ scale: 1.02 }}
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <ProfileCardView
        {...props}
        likeOpacity={likeOpacity}
        nopeOpacity={nopeOpacity}
      />
    </motion.div>
  )
}
