import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useParams } from "react-router-dom"
import ProfileHeader from "@/components/profile/ProfileHeader"
import ProfileAbout from "@/components/profile/ProfileAbout"
import ProfileInterests from "@/components/profile/ProfileInterests"
import ProfileDetails from "@/components/profile/ProfileDetails"
import ProfileGallery from "@/components/profile/ProfileGallery"
import ProfileLookingFor from "@/components/profile/ProfileLookingFor"
import ProfileCTA from "@/components/profile/ProfileCTA"


import type { LucideIcon } from "lucide-react"
import {
  Palette,
  Coffee,
  Plane,
  Music,
  Book,
} from "lucide-react"

type Profile = {
  id: string
  name: string
  age: number
  location: string
  avatar: string | null
  tags: string[]
  about: string[]
  interests: { label: string; icon: LucideIcon }[]
  details: { label: string; value: string }[]
  photos: string[]
  lookingFor: {
    description: string
    ideal: string[]
    dealBreakers: string[]
  }
}



export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
    const { id } = useParams<{ id: string }>()

  useEffect(() => {
    const loadProfile = async () => {
      setLoading(true)

    //   const { data, error } = await supabase
    //     .from("profiles")
    //     .select("*")
    //     .single()
        const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", id)
            .single()

      if (error) {
        setError(error.message)
        setLoading(false)
        return
      }

      setProfile(mapSupabaseProfile(data))
      setLoading(false)
    }

    loadProfile()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Loading profile...
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    )
  }

  if (!profile) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-brand-100 to-brand-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ProfileHeader
          name={profile.name}
          age={profile.age}
          location={profile.location}
          avatar={profile.avatar}
          tags={profile.tags}
          onLike={() => console.log("Like")}
          onMessage={() => console.log("Message")}
        />

        <ProfileAbout paragraphs={profile.about} />

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <ProfileInterests interests={profile.interests} />
          <ProfileDetails details={profile.details} />
        </div>

        <ProfileGallery photos={profile.photos} />

        <ProfileLookingFor
          description={profile.lookingFor.description}
          ideal={profile.lookingFor.ideal}
          dealBreakers={profile.lookingFor.dealBreakers}
        />

        <ProfileCTA
          headline="Interested in getting to know me?"
          subtext="Send me a message and let's start a conversation!"
          onSendMessage={() => console.log("Send message")}
          onShare={() => console.log("Share")}
        />
      </div>
    </div>
  )
}

function mapSupabaseProfile(row: any): Profile {
  return {
    id: row.id,
    name: row.name,
    age: row.age,
    location: row.location,
    avatar: row.avatar,
    tags: row.tags ?? [],
    about: row.about ?? [],
    interests: [
      { label: "Art & Design", icon: Palette },
      { label: "Coffee Culture", icon: Coffee },
      { label: "Travel & Adventure", icon: Plane },
      { label: "Live Music", icon: Music },
      { label: "Reading & Literature", icon: Book },
    ],
    details: [
      { label: "Height", value: row.height ?? "-" },
      { label: "Education", value: row.education ?? "-" },
      { label: "Occupation", value: row.occupation ?? "-" },
      { label: "Languages", value: row.languages ?? "-" },
      { label: "Pets", value: row.pets ?? "-" },
      { label: "Relationship", value: row.relationship ?? "-" },
    ],
    photos: row.photos ?? [],
    lookingFor: {
      description: row.looking_for_description ?? "",
      ideal: row.ideal ?? [],
      dealBreakers: row.deal_breakers ?? [],
    },
  }
}
