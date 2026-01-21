import { Routes, Route } from "react-router-dom"
import AppLayout from "@/components/layout/AppLayout"
import Landing from "@/pages/Landing"
import  Discover from "@/pages/Discover"
import Matches from "@/pages/Matches"
import Profile from "@/pages/Profile"
import Settings from "@/pages/Settings"
import Chats from "@/pages/Chats"
import Chat from "@/pages/Chat"
import ProtectedRoute from "@/components/auth/ProtectedRoute"
import Login from "@/pages/Login"
import Signup from "@/pages/Signup"



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route element={<AppLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/discover" element={<ProtectedRoute><Discover /></ProtectedRoute>} />
        <Route path="/matches" element={<ProtectedRoute><Matches /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path="/chats" element={<ProtectedRoute><Chats /></ProtectedRoute>} />
        <Route path="/chats/:id" element={<ProtectedRoute><Chat /></ProtectedRoute>} />

      </Route>
    </Routes>
  )
}
