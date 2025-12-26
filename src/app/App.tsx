import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechFest } from './components/TechFest';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <TechFest />
      <Footer />
    </div>
  );
}
