import Hero from "@/components/landing/Hero"
import HowItWorks from "@/components/landing/HowItWorks"
import CTA from "@/components/landing/CTA"
import LandingNavbar from "@/components/layout/LandingNavbar"
import Footer from "@/components/layout/Footer"
export default function Landing() {
  return (
    <div>
      <LandingNavbar />
      <Hero />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  )
}
