import { supabase } from "@/lib/supabase"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function LogoutButton() {
  const navigate = useNavigate()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate("/login")
  }

  return (
    <Button variant="ghost" onClick={handleLogout}>
      Log out
    </Button>
  )
}
