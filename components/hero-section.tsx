'use client'; // Añadimos por si acaso para futuros hooks

// import { ModeToggle } from "@/components/mode-toggle"; // No se usa aquí
// import { Button } from "@/components/ui/button"; // No se usa aquí

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center gap-4 pt-16"> 
      {/* Controles eliminados de aquí */}

      {/* Placeholder para Imagen */}
      <div className="w-32 h-32 sm:w-48 sm:h-48 bg-muted rounded-full flex items-center justify-center text-muted-foreground mb-4">
        Foto
      </div>

      {/* Nombre */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center">Joaquín Torroba</h1>

      {/* Tagline */}
      <p className="text-lg text-muted-foreground text-center max-w-md"> {/* Añadido max-w para mejor lectura */}
        Desde 2022 vivo IA, uniendo enterprise y startups.
      </p>

      {/* Placeholder para CTA */}
      <div className="sr-only" aria-label="CTA próximamente"></div>
    </section>
  );
} 