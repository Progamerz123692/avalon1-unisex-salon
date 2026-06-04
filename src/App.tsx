import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Bridal from './components/Bridal';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import MapSection from './components/MapSection';
import BusinessHours from './components/BusinessHours';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

// Import images to allow Vite to process them
import heroImage from './assets/images/luxury_salon_hero_1780566136667.png';
import aboutImage from './assets/images/salon_ambiance_about_1780566169419.png';
import bridalImage from './assets/images/bridal_makeup_showcase_1780566154560.png';

export default function App() {
  return (
    <div className="min-h-screen bg-salon-black">
      <Navbar />
      <main>
        <Hero backgroundImage={heroImage} />
        <About image={aboutImage} />
        <Services />
        <WhyChooseUs />
        <Bridal image={bridalImage} />
        <Gallery />
        <Testimonials />
        <Booking />
        <MapSection />
        <BusinessHours />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
