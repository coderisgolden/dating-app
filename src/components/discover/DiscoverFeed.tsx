import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import ProfileCard from "./ProfileCard"
import MatchModal from "./MatchModal"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/lib/AuthContext"

type Profile = {
  id: string
  name: string
  age: number
  location: string
  bio: string
  image: string
  interests: string[]
}

// TODO: Byt till riktig fetch senare
const MOCK_PROFILES: Profile[] = [
  {
    id: "u2",
    name: "Emma",
    age: 28,
    location: "New York",
    bio: "Adventure seeker ☕",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=700&fit=crop",
    interests: ["Travel", "Music", "Reading"],
  },
  {
    id: "u3",
    name: "Sofia",
    age: 26,
    location: "Stockholm",
    bio: "Designer. Nature lover 🌿",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=700&fit=crop",
    interests: ["Yoga", "Art", "Nature"],
  },
]

type MatchState = {
  open: boolean
  profile: Profile | null
  chatId: string | null
  loading: boolean
  error: string | null
}

export default function DiscoverFeed() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const [index, setIndex] = useState(0)
  const [match, setMatch] = useState<MatchState>({
    open: false,
    profile: null,
    chatId: null,
    loading: false,
    error: null,
  })

  const current = useMemo(() => MOCK_PROFILES[index], [index])
  const next = useMemo(() => MOCK_PROFILES[index + 1], [index])

  const goNext = () => {
    setIndex((i) => (i + 1) % MOCK_PROFILES.length)
  }

  const handlePass = () => {
    goNext()
  }

  const handleLike = async () => {
    if (!user || !current) return

    try {
      // 1) Spara like
      const { error: likeErr } = await supabase.from("likes").insert([
        { from_user: user.id, to_user: current.id },
      ])
      if (likeErr) throw likeErr

      // 2) Kolla om mot-like finns
      const { data: reciprocal, error: recErr } = await supabase
        .from("likes")
        .select("id")
        .eq("from_user", current.id)
        .eq("to_user", user.id)
        .maybeSingle()

      if (recErr) throw recErr

      // Om ingen mot-like → bara nästa kort
      if (!reciprocal) {
        goNext()
        return
      }

      // 3) Skapa match + chat
      setMatch({
        open: true,
        profile: current,
        chatId: null,
        loading: true,
        error: null,
      })

      const { data: chat, error: chatErr } = await supabase
        .from("chats")
        .insert([{ user1: user.id, user2: current.id }])
        .select()
        .single()

      if (chatErr) throw chatErr

      const { error: matchErr } = await supabase.from("matches").insert([
        { user1: user.id, user2: current.id },
      ])
      if (matchErr) throw matchErr

      setMatch((m) => ({
        ...m,
        chatId: chat.id,
        loading: false,
      }))
    } catch (e: any) {
      setMatch((m) => ({
        ...m,
        loading: false,
        error: e.message ?? "Something went wrong",
      }))
    }
  }

  if (!current) {
    return (
      <div className="h-[600px] flex items-center justify-center text-gray-400">
        No more profiles
      </div>
    )
  }

  return (
    <div className="relative w-full flex justify-center items-center h-[600px]">
      {next && (
        <motion.div
          className="absolute"
          style={{ scale: 0.95, y: 16, zIndex: 0 }}
        >
          <ProfileCard {...next} onLike={() => {}} onPass={() => {}} />
        </motion.div>
      )}

      <AnimatePresence>
        <motion.div
          key={current.id}
          className="absolute"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          style={{ zIndex: 10 }}
        >
          <ProfileCard
            {...current}
            onLike={handleLike}
            onPass={handlePass}
          />
        </motion.div>
      </AnimatePresence>

      {match.profile && (
        <MatchModal
          open={match.open}
          name={match.profile.name}
          image={match.profile.image}
          loading={match.loading}
          error={match.error}
          onClose={() => {
            setMatch({
              open: false,
              profile: null,
              chatId: null,
              loading: false,
              error: null,
            })
            goNext()
          }}
          onStartChat={() => {
            if (!match.chatId) return
            setMatch({
              open: false,
              profile: null,
              chatId: null,
              loading: false,
              error: null,
            })
            navigate(`/chats/${match.chatId}`)
          }}
        />
      )}
    </div>
  )
}
