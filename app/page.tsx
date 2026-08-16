import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home(): JSX.Element {
  return (
    <main className="overflow-x-hidden pb-10">
      <Navbar />
      <Hero />
      <Services />
    </main>
  );
}
