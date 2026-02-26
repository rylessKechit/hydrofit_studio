import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Non Trouvée | Page Not Found",
};

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(129,216,208,0.06)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        {/* Large 404 */}
        <h1 className="font-display text-[10rem] sm:text-[14rem] md:text-[18rem] leading-none tracking-wide text-white/5 select-none">
          404
        </h1>

        {/* Title overlaid */}
        <div className="-mt-24 sm:-mt-32 md:-mt-40">
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-wide">
            Page <span className="text-tiffany">Non Trouvée</span>
          </h2>

          <p className="mt-6 text-lg text-white/60 max-w-md mx-auto">
            On dirait que vous avez dérivé dans des eaux inexplorées.
            Remontons à la surface.
          </p>

          <p className="mt-2 text-sm text-white/40 max-w-md mx-auto">
            Looks like you&apos;ve drifted into uncharted waters. Let&apos;s
            get you back to the surface.
          </p>

          {/* Static button (no framer-motion for server component) */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/fr"
              className="inline-flex items-center justify-center font-semibold tracking-wide uppercase bg-tiffany text-black px-8 py-4 text-base transition-all duration-300 hover:bg-tiffany-dark active:scale-95"
            >
              Accueil (FR)
            </Link>
            <Link
              href="/en"
              className="inline-flex items-center justify-center font-semibold tracking-wide uppercase border border-tiffany text-tiffany px-8 py-4 text-base transition-all duration-300 hover:bg-tiffany hover:text-black active:scale-95"
            >
              Home (EN)
            </Link>
          </div>

          <p className="mt-8 text-sm text-gray">
            Ou explorez nos{" "}
            <Link href="/fr/courses" className="text-tiffany hover:underline">
              cours
            </Link>
            ,{" "}
            <Link href="/fr/booking" className="text-tiffany hover:underline">
              tarifs
            </Link>
            , ou{" "}
            <a href="https://wa.me/971501234567" className="text-tiffany hover:underline">
              contactez-nous
            </a>
            .
          </p>
          <p className="mt-2 text-sm text-gray">
            Or explore our{" "}
            <Link href="/en/courses" className="text-tiffany hover:underline">
              classes
            </Link>
            ,{" "}
            <Link href="/en/booking" className="text-tiffany hover:underline">
              pricing
            </Link>
            , or{" "}
            <a href="https://wa.me/971501234567" className="text-tiffany hover:underline">
              get in touch
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
