import { Heart, Check, X } from "lucide-react"

type Props = {
  description: string
  ideal: string[]
  dealBreakers: string[]
}

export default function ProfileLookingFor({
  description,
  ideal,
  dealBreakers,
}: Props) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
        <Heart className="w-6 h-6 mr-2 text-brand-500" />
        Looking For
      </h2>

      <p className="text-base text-gray-700 leading-relaxed mb-4">
        {description}
      </p>

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <div className="p-4 bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl">
          <h3 className="font-semibold text-gray-800 mb-2">
            Ideal Match
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {ideal.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl">
          <h3 className="font-semibold text-gray-800 mb-2">
            Deal Breakers
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {dealBreakers.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <X className="w-4 h-4 text-brand-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
