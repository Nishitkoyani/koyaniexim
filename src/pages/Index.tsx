import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import GlobalReach from "@/components/GlobalReach";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Import Export Company in Gujarat India | Koyani Exim"
        description="Koyani Exim is an import export company in Gujarat India providing export services, import services, international trade and global sourcing."
      />
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <GlobalReach />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;