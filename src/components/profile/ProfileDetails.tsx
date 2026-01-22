import { User } from "lucide-react"

type DetailItem = {
  label: string
  value: string
}

type Props = {
  details: DetailItem[]
}

export default function ProfileDetails({ details }: Props) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
        <User className="w-6 h-6 mr-2 text-brand-500" />
        Details
      </h2>

      <div className="space-y-4">
        {details.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center pb-3 border-b border-brand-100 last:border-b-0"
          >
            <span className="text-gray-600">{item.label}</span>
            <span className="text-gray-800 font-medium">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
