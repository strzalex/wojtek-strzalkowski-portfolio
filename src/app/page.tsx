import HeroSection from '../components/HeroSection';
import ExperienceSection from '../components/ExperienceSection';
import ConsultingSection from '../components/ConsultingSection';
import ExpertiseSection from '../components/ExpertiseSection';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <HeroSection />
        <ExperienceSection />
        <ConsultingSection />
        <ExpertiseSection />
      </div>
    </main>
  )
}