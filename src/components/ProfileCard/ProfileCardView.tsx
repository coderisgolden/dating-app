import { MotionValue, motion } from "framer-motion"
import ProfileImage from "./ProfileImage"
import ProfileInfo from "./ProfileInfo"
import ProfileActions from "./ProfileActions"

type Props = {
  name: string
  age: number
  location: string
  bio: string
  image: string | null

  interests: string[]
  onLike: () => void
  onPass: () => void
  likeOpacity: MotionValue<number>
  nopeOpacity: MotionValue<number>
}

export default function ProfileCardView({
  name,
  age,
  location,
  bio,
  image,
  interests,
  onLike,
  onPass,
  likeOpacity,
  nopeOpacity,
}: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="relative">
        <ProfileImage src={image} />

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

      <ProfileInfo bio={bio} interests={interests} />
      <ProfileActions onLike={onLike} onPass={onPass} />
    </div>
  )
}
