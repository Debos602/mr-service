import Image from "next/image";
import { Check } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { about, images } from "@/lib/content";

type Photo = { src: string; alt: string; aspect: string; offset: string };

const columns: Photo[][] = [
  [
    { src: images.appliance.src, alt: "MR SERVICES Technician", aspect: "aspect-square", offset: "translate-y-8" },
    { src: images.tv.src, alt: "LED TV Repair", aspect: "aspect-[3/4]", offset: "translate-x-4" },
  ],
  [
    { src: images.lab.src, alt: "Technical Laboratory", aspect: "aspect-[3/4]", offset: "-translate-x-4" },
    { src: images.mobile.src, alt: "Mobile Phone Repair", aspect: "aspect-square", offset: "" },
  ],
];

export function About() {
  return (
    <section id="about" className="section-y bg-surface">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1" x={-30} y={0}>
            <div className="grid grid-cols-2 gap-4">
              {columns.map((col, c) => (
                <div key={c} className={`space-y-4 ${c === 1 ? "pt-12" : ""}`}>
                  {col.map((photo) => (
                    <div
                      key={photo.alt}
                      className={`transform rounded-3xl bg-white p-2 shadow-lg ${photo.offset}`}
                    >
                      <div
                        className={`relative overflow-hidden rounded-2xl bg-line shadow-inner ${photo.aspect}`}
                      >
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="(min-width: 1024px) 25vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <Eyebrow variant="plain">About Us</Eyebrow>
              <h2 className="type-title mb-8 leading-tight">
                Professional Repair Experts You Can Rely On
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`text-lg leading-relaxed text-body ${
                    i === about.paragraphs.length - 1 ? "mb-8" : "mb-6"
                  }`}
                >
                  {p}
                </p>
              ))}
            </Reveal>
            <ul className="space-y-4">
              {about.points.map((point, i) => (
                <Reveal as="li" key={point} delay={0.15 + i * 0.08} className="flex items-center space-x-3">
                  <span className="shrink-0 rounded-full bg-accent p-1 text-white">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="font-bold text-ink-soft">{point}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
