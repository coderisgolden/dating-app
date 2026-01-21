import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-brand-500 text-2xl">❤️</span>
              <span className="text-xl font-bold">HeartMatch</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Connecting hearts worldwide since 2020. Find your perfect match today.
            </p>
          </div>

          <FooterColumn
            title="Company"
            links={[
              { label: "About Us", to: "/about" },
              { label: "Careers", to: "/careers" },
              { label: "Press", to: "/press" },
              { label: "Blog", to: "/blog" },
            ]}
          />

          <FooterColumn
            title="Support"
            links={[
              { label: "Help Center", to: "/help" },
              { label: "Safety Tips", to: "/safety" },
              { label: "Community Guidelines", to: "/guidelines" },
              { label: "Contact Us", to: "/contact" },
            ]}
          />

          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <SocialIcon label="Twitter" />
              <SocialIcon label="Instagram" />
              <SocialIcon label="Facebook" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">
            © 2026 HeartMatch. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link className="text-gray-400 hover:text-brand-500 transition" to="/privacy">
              Privacy Policy
            </Link>
            <Link className="text-gray-400 hover:text-brand-500 transition" to="/terms">
              Terms of Service
            </Link>
            <Link className="text-gray-400 hover:text-brand-500 transition" to="/cookies">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; to: string }[]
}) {
  return (
    <div>
      <h4 className="font-semibold text-lg mb-4">{title}</h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              className="text-gray-400 hover:text-brand-500 transition"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SocialIcon({ label }: { label: string }) {
  return (
    <div
      aria-label={label}
      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-500 transition cursor-pointer"
    >
      {label[0]}
    </div>
  )
}
