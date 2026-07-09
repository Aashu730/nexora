import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Trending from "../components/Trending";
import Categories from "../components/Categories";
import Comparison from "../components/Comparison";
import Timeline from "../components/Timeline";
import Features from "../components/Features";
import AIPreview from "../components/AIPreview";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#070B14] text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Trending />
      <Categories />
      <Comparison />
      <Timeline />
      <Features />
      <AIPreview />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

export default Home;