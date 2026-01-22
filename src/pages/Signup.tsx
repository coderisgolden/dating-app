import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function Signup() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleSignup = async () => {
    setError(null)

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      return
    }

    const user = data.user

    if (!user) {
      setError("No user returned from signup.")
      return
    }

    // Skapa profil med samma ID som auth.user.id
    const { error: profileError } = await supabase.from("profiles").insert({
      id: user.id,
      name: email.split("@")[0], // temporärt namn
      age: 25, // default tills onboarding
      location: "Unknown",
      bio: "",
      image: "",
      interests: [],
    })

    if (profileError) {
      setError(profileError.message)
      return
    }

    navigate("/discover")
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm p-8 space-y-4">
        <h1 className="text-2xl font-bold">Sign up</h1>

        <input
          className="w-full border p-3 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border p-3 rounded"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button className="w-full" onClick={handleSignup}>
          Create account
        </Button>
      </div>
    </div>
  )
}
