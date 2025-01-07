import Hero from "./components/hero";
import Features from "./components/features";
import Pricing from "./components/pricing";
import Stats from "./components/stats";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className=" z-50">
        <Navbar />
      </div>
      <Hero />
      <Stats />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}
