import Image from "next/image";
import { Camera } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/lib/content";

const tileBase =
  "group relative overflow-hidden rounded-card bg-line";
const imgBase =
  "object-cover transition-transform duration-700 group-hover:scale-110";

export function Workspace() {
  return (
    <section className="section-y bg-surface">
      <div className="container">
        <Reveal className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow variant="plain">Our Workspace</Eyebrow>
            <h2 className="type-title mb-6">
              Expert Repairs in Action
            </h2>
            <p className="text-lg text-body">
              Take a look at our professional repair environment and some of our
              recent work. Reliability you can see.
            </p>
          </div>
          <div className="mb-2 flex w-fit items-center space-x-2 rounded-full border border-line-soft bg-white px-6 py-3 shadow-md">
            <Camera className="h-5 w-5 text-primary" />
            <span className="font-bold text-ink-soft">Recent Photos</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          <Reveal className={`${tileBase} col-span-2 row-span-2 min-h-[400px]`}>
            <Image
              src={images.workshop.src}
              alt="MR SERVICES Diagnostic Center"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className={imgBase}
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/60 to-transparent p-8">
              <div>
                <p className="text-2xl font-black text-white">Main Service Center</p>
                <p className="text-sm font-bold tracking-widest text-white/70 uppercase">
                  Visakhapatnam Branch
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className={`${tileBase} min-h-[200px]`}>
            <Image src={images.appliance.src} alt="Branded Appliance Repair" fill sizes="(min-width: 768px) 25vw, 50vw" className={imgBase} />
            <div className="absolute inset-0 bg-ink/10 transition-colors group-hover:bg-transparent" />
          </Reveal>

          <Reveal delay={0.2} className={`${tileBase} min-h-[200px]`}>
            <Image src={images.tv.src} alt="Expert LED TV Repair" fill sizes="(min-width: 768px) 25vw, 50vw" className={imgBase} />
            <div className="absolute inset-0 bg-ink/10 transition-colors group-hover:bg-transparent" />
          </Reveal>

          <Reveal delay={0.3} className={`${tileBase} col-span-2 min-h-[200px]`}>
            <Image src={images.lab.src} alt="Diagnostic Laboratory - MR SERVICES" fill sizes="(min-width: 768px) 50vw, 100vw" className={imgBase} />
            <div className="absolute inset-0 flex items-center bg-gradient-to-r from-ink/50 to-transparent p-8">
              <div>
                <p className="text-2xl font-black text-white">Precision Testing</p>
                <p className="text-sm font-bold tracking-widest text-white/70 uppercase">
                  Advanced Equipment
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
