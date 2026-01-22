

import { Palette } from "lucide-react"
import type { LucideIcon } from "lucide-react"


type Interest = {
  label: string
  icon?: LucideIcon
}

type Props = {
  interests: Interest[]
}

export default function ProfileInterests({ interests }: Props) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
        <Palette className="w-6 h-6 mr-2 text-brand-500" />
        Interests
      </h2>

      <div className="space-y-3">
        {interests.map((item, i) => {
          const Icon = item.icon
          return (
            <div
              key={i}
              className="flex items-center gap-3 p-3 bg-brand-50 rounded-2xl"
            >
              {Icon && (
                <Icon className="w-5 h-5 text-brand-600" />
              )}
              <span className="text-gray-700">
                {item.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
