import { useEffect, useMemo, useState } from "react"
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
  image: string | null
  interests: string[]
}

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

  const [profiles, setProfiles] = useState<Profile[]>([])
  const [loadingProfiles, setLoadingProfiles] = useState(true)
  const [errorProfiles, setErrorProfiles] = useState<string | null>(null)

  const [index, setIndex] = useState(0)

  const [match, setMatch] = useState<MatchState>({
    open: false,
    profile: null,
    chatId: null,
    loading: false,
    error: null,
  })

  // Hämta profiler
  useEffect(() => {
    if (!user) return

    const fetchProfiles = async () => {
      setLoadingProfiles(true)
      setErrorProfiles(null)

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .neq("id", user.id)

      if (error) {
        setErrorProfiles(error.message)
        setLoadingProfiles(false)
        return
      }

      setProfiles(data || [])
      setLoadingProfiles(false)
    }

    fetchProfiles()
  }, [user])

  const current = useMemo(() => profiles[index], [profiles, index])

  const goNext = () => {
    setIndex((i) => i + 1)
  }

  const handlePass = () => {
    goNext()
  }

  const handleLike = async () => {
    if (!user || !current) return

    try {
      const { error: likeErr } = await supabase.from("likes").insert([
        { from_user: user.id, to_user: current.id },
      ])
      if (likeErr) throw likeErr

      const { data: reciprocal, error: recErr } = await supabase
        .from("likes")
        .select("id")
        .eq("from_user", current.id)
        .eq("to_user", user.id)
        .maybeSingle()

      if (recErr) throw recErr

      if (!reciprocal) {
        goNext()
        return
      }

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

  if (loadingProfiles) {
    return (
      <div className="h-[600px] flex items-center justify-center text-gray-400">
        Loading profiles...
      </div>
    )
  }

  if (errorProfiles) {
    return (
      <div className="h-[600px] flex items-center justify-center text-red-500">
        {errorProfiles}
      </div>
    )
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
      <ProfileCard
        {...current}
        onLike={handleLike}
        onPass={handlePass}
        onOpenProfile={() => navigate(`/profile/${current.id}`)}
      />

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
