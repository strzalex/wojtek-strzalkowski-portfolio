export default function ExperienceSection() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">Leadership Experience</h2>
      <div className="grid gap-8">
        {/* AI Product Leadership */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-bold mb-2 text-blue-600">AI Product Leadership</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Led ML product development at Booking.com, driving significant cost savings and revenue growth through innovative AI solutions</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Spearheaded AI-driven solutions at Allegro, enhancing user experience and platform efficiency</span>
            </li>
          </ul>
        </div>
        
        {/* Product Strategy & Leadership */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-bold mb-2 text-blue-600">Product Strategy & Leadership</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Head of Product at GOG.com, leading game preservation initiatives and digital distribution innovation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Led WeSchool's product strategy as Head of Product, scaling Italy's leading EdTech platform post 6.4M€ Series A funding</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Managed cross-functional product teams at Million Pugs, implementing OKR framework and data-driven approaches</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}