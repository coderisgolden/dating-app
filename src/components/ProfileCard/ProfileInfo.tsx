type Props = {
  bio: string
  interests: string[]
}

export default function ProfileInfo({ bio, interests }: Props) {
  return (
    <div className="p-5 space-y-3">
      <p className="text-sm text-gray-600">{bio}</p>

      <div className="flex flex-wrap gap-2">
        {interests.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
