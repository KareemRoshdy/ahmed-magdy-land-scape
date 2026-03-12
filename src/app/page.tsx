import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/gallery/Gallery";
import Hero from "@/components/Hero";
import Services from "@/components/service/Services";
import Header from "@/components/shared/Header";

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
