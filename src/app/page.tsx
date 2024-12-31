export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Wojtek Strzałkowski</h1>
          <p className="text-xl mb-4 text-blue-600">
            AI Product Leader | Product Strategy Consultant | Gaming Industry Professional
          </p>
          <p className="text-gray-600">
            Currently Product at GOG.com (CD PROJEKT GROUP)
          </p>
        </section>

        {/* Experience Highlights */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold">Product @ GOG.com</h3>
              <p className="text-gray-600">Jul 2024 - Present</p>
              <p>Leading product initiatives in gaming preservation and digital distribution</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}