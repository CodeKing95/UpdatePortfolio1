import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <section className="min-h-screen">
      <HeroSection />
      </section>
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20 sm:space-y-28">
      <AboutMe />
      <MyPortfolio />
      <MySkills />
      <Testimonial />
      <ContactMe />
      </section>
      <Footer />
    </main>
  );
}
