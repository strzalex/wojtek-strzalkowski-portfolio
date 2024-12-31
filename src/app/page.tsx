import HeroSection from '../components/HeroSection';
import ExperienceSection from '../components/ExperienceSection';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <HeroSection />
        <ExperienceSection />
      </div>
    </main>
  )
}