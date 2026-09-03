import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { MenuPreview } from "./components/MenuPreview";
import { Socials } from "./components/Socials";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-smoke grain relative min-h-screen font-sans text-bone">
      <a
        href="#features"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-crimson focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Features />
        <MenuPreview />
        <Socials />
      </main>
      <Footer />
    </div>
  );
}
