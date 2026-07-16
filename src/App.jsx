import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialFloat from "./components/SocialFloat";

export default function App() {
  return (
    <>
      <Navbar />
      <SocialFloat />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
