export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How HeartMatch Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Finding love has never been easier. Follow these simple steps to start your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <Step
            title="Create Your Profile"
            description="Sign up for free and create a profile that showcases your personality, interests, and what you're looking for in a partner."
            bg="bg-brand-50"
            iconBg="bg-brand-500"
            icon="👤"
          />

          <Step
            title="Discover Matches"
            description="Our smart algorithm analyzes your preferences and personality to suggest compatible matches tailored just for you."
            bg="bg-brand-100"
            iconBg="bg-brand-500"
            icon="🔍"
          />

          <Step
            title="Start Connecting"
            description="Send messages, video chat, and build meaningful connections with people who truly understand you."
            bg="bg-brand-50"
            iconBg="bg-brand-500"
            icon="💬"
          />
        </div>
      </div>
    </section>
  )
}

function Step({
  title,
  description,
  bg,
  iconBg,
  icon,
}: {
  title: string
  description: string
  bg: string
  iconBg: string
  icon: string
}) {
  return (
    <div className={`text-center p-10 rounded-3xl ${bg} hover:shadow-xl transition`}>
      <div
        className={`w-20 h-20 ${iconBg} rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl`}
      >
        {icon}
      </div>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
