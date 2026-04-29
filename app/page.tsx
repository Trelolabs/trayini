import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col font-sans">
      <div className="flex-1 flex flex-col">
        <Hero />
      </div>
      <Footer />
    </main>
  );
}
