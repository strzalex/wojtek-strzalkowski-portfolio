export default function HeroSection() {
  return (
    <header className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          Wojtek Strzałkowski
        </h1>
        <p className="text-xl text-blue-600 mb-6">
          AI Product Leader | Product Strategy Consultant | Gaming Industry Expert
        </p>
        <p className="text-lg text-gray-600">
          Transforming businesses through AI-driven product innovation and strategic leadership
        </p>
        
        {/* Current Role Card */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-8 text-left">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Currently</h2>
          <p className="text-lg text-gray-700 mb-4">
            Product @ GOG.com (CD PROJEKT GROUP)
          </p>
          <p className="text-gray-600">
            Leading game preservation initiatives and digital distribution innovation
          </p>
        </div>
      </div>
    </header>
  )
}