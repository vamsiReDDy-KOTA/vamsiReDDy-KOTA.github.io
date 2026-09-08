import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DomainGrid from "@/components/DomainGrid";
import ProjectShowcase from "@/components/ProjectShowcase";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <DomainGrid />
        <ProjectShowcase />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
