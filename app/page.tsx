import HeroSection from "@/components/hero-section";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 max-w-3xl mx-auto gap-8 relative">
      <div className="fixed top-8 right-8 z-50 flex items-center gap-2">
        <ModeToggle />
        <Button variant="outline" size="icon" aria-label="Cambiar idioma" disabled>
          ES
        </Button>
      </div>

      <HeroSection />
    </main>
  );
}
