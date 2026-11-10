import { MapPin } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { areas, mapView } from "@/lib/content";
import { AreaMap } from "./AreaMap";

export function ServiceAreas() {
  return (
    <section
      id="areas"
      className="relative overflow-hidden border-y border-line/60 bg-surface section-y md:section-y-lg"
    >
      <div aria-hidden className="pointer-events-none absolute top-0 right-0 hidden h-[800px] w-[800px] translate-x-1/3 -translate-y-1/2 rounded-full bg-blue-400/5 blur-blob-lg md:block" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 hidden h-[600px] w-[600px] -translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-400/5 blur-blob md:block" />

      <div className="relative z-10 container">
        <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow ping className="mb-6 md:mb-8">
                Extensive Coverage
              </Eyebrow>
              <h2 className="type-title mb-6 leading-heading tracking-tight lg:text-6xl">
                Expert Repair, Right at <GradientText>Your Doorstep.</GradientText>
              </h2>
              <p className="mb-10 text-base leading-relaxed font-medium text-body md:text-lg lg:text-xl">
                We provide fast and reliable doorstep repair for all your home
                appliances and electronics anywhere in Visakhapatnam. No need to
                carry heavy devices—just give us a call, and our technicians will
                come directly to your home!
              </p>
            </Reveal>

            <ul className="grid gap-3 sm:grid-cols-2 md:gap-4">
              {areas.map((area, i) => (
                <Reveal
                  as="li"
                  key={area.name}
                  delay={i * 0.06}
                  className="group flex cursor-default items-center space-x-4 rounded-2xl border border-line bg-white p-3 transition-all duration-300 hover:border-blue-400 hover:shadow-lift md:p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-line-soft transition-colors duration-300 group-hover:bg-accent">
                    <MapPin className="h-5 w-5 text-muted transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <span className="text-sm font-bold text-ink-soft transition-colors duration-300 group-hover:text-ink md:text-base">
                    {area.name}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal
            className="relative mb-10 h-full min-h-[400px] lg:col-span-7 lg:mb-0 lg:min-h-[500px]"
            x={30}
            y={0}
            delay={0.2}
          >
            <div className="relative h-[400px] w-full rounded-card border border-line-soft bg-white p-1.5 shadow-2xl shadow-line md:h-full md:rounded-media md:p-2">
              <div className="relative isolate h-full min-h-[400px] w-full overflow-hidden rounded-card-inner border border-line bg-line-soft md:min-h-[550px]">
                <div className="absolute inset-0 z-0">
                  <AreaMap />
                </div>

                <div className="pointer-events-none absolute top-6 left-6 z-[400] hidden items-center space-x-4 rounded-2xl border border-line-soft bg-white/95 px-5 py-4 shadow-xl backdrop-blur-md sm:flex">
                  <div className="rounded-full bg-accent p-2.5 text-white shadow-lg shadow-blue-500/30">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="mb-0.5 type-label text-xs">
                      Active Region
                    </p>
                    <p className="text-lg leading-tight font-black text-ink">
                      {mapView.region}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
