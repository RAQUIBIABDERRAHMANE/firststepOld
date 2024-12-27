import Navbar from "./components/navbar";
import Hero from "./components/hero";


export default function Home() {
  return (
    <main className="flex flex-col">
      <div className=" z-50">
        <Navbar/>
      </div>
      <div className="z-40">
        <Hero/>
      </div>
    </main>
  );
}
