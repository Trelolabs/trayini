import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="gradient-bg" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ServiceCards />
        <Footer />
      </div>
    </main>
  );
}
