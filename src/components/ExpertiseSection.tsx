export default function ExpertiseSection() {
  const expertise = [
    { title: 'AI/ML Products', description: 'Development and implementation of machine learning solutions' },
    { title: 'Product Strategy', description: 'Strategic product planning and execution' },
    { title: 'Gaming Industry', description: 'Digital distribution and game preservation' },
    { title: 'Team Leadership', description: 'Managing cross-functional product teams' },
    { title: 'Product Coaching', description: 'Mentoring and developing product managers' },
    { title: 'EdTech', description: 'Educational technology solutions' }
  ]

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">Areas of Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertise.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-bold mb-2 text-blue-600">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}