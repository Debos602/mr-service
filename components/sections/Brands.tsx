import Image from "next/image";
import { brandLogo, brands } from "@/lib/content";

function BrandCard({ brand, hidden }: { brand: string; hidden?: boolean }) {
  return (
    <div className="mx-4 flex w-40 flex-shrink-0 transform items-center justify-center rounded-2xl border border-line-soft bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg md:mx-6 md:w-48">
      <div className="relative flex h-10 w-full items-center justify-center md:h-12">
        <Image
          src={brandLogo(brand)}
          alt={hidden ? "" : `${brand} logo`}
          fill
          sizes="192px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export function Brands() {
  return (
    <section className="relative overflow-hidden border-y border-line section-y-sm bg-surface">
      <div className="container mb-10 text-center md:px-4">
        <h2 className="mb-2 text-3xl font-extrabold tracking-tight text-ink">
          Supported Top Brands
        </h2>
        <p className="text-sm font-medium text-muted lg:text-base">
          Professional service and genuine parts for all premium devices
        </p>
      </div>

      <div className="group relative flex w-full max-w-[100vw] overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent md:w-32" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent md:w-32" />

        <div className="flex min-w-max animate-marquee items-center py-4 group-hover:[animation-play-state:paused]">
          {brands.map((brand) => (
            <BrandCard key={brand} brand={brand} />
          ))}
          {/* Duplicate set for a seamless loop; hidden from assistive tech. */}
          <div aria-hidden className="flex items-center">
            {brands.map((brand) => (
              <BrandCard key={`dup-${brand}`} brand={brand} hidden />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
