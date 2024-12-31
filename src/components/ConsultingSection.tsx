export default function ConsultingSection() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">Consulting & Academic Experience</h2>
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Product Strategy Consulting */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2 text-blue-600">Product Strategy Consultant</h3>
          <p className="text-gray-700 mb-4">
            Founded Awayteam.gg, providing strategic consulting for companies like Displate (2.3M customers).
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Specializing in Search, Recommendations, and AI product strategy</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Providing actionable recommendations for conversion rate optimization</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Product coaching and mentoring for emerging product leaders</span>
            </li>
          </ul>
        </div>

        {/* Academic Position */}
        <div>
          <h3 className="text-xl font-bold mb-2 text-blue-600">Guest Lecturer</h3>
          <p className="text-gray-700 mb-4">
            AI in Business at SGH Warsaw School of Economics
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Teaching AI implementation in digital products</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Sharing practical insights from industry experience</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}