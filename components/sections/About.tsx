import Image from "next/image";
import { Check } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MotionDiv, MotionLi } from "@/components/ui/motion";
import { about, images } from "@/lib/content";
import { inView } from "@/lib/motion";

type Photo = {
  src: string;
  alt: string;
  aspect: string;
  offset: string;
  /** Reference entrance: from → to (to includes the resting nudge, e.g. y: 8). */
  from: { x?: number; y?: number; rotate?: number };
  to: { x?: number; y?: number; rotate?: number };
  delay: number;
};

const columns: Photo[][] = [
  [
    { src: images.appliance.src, alt: "MR SERVICES Technician", aspect: "aspect-square", offset: "translate-y-8", from: { y: 40, rotate: -3 }, to: { y: 8, rotate: 0 }, delay: 0.1 },
    { src: images.tv.src, alt: "LED TV Repair", aspect: "aspect-[3/4]", offset: "translate-x-4", from: { x: -40 }, to: { x: 4 }, delay: 0.3 },
  ],
  [
    { src: images.lab.src, alt: "Technical Laboratory", aspect: "aspect-[3/4]", offset: "-translate-x-4", from: { x: 40 }, to: { x: -4 }, delay: 0.2 },
    { src: images.mobile.src, alt: "Mobile Phone Repair", aspect: "aspect-square", offset: "", from: { y: 40, rotate: 3 }, to: { y: 0, rotate: 0 }, delay: 0.4 },
  ],
];

export function About() {
  return (
    <section id="about" className="section-y bg-surface">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <MotionDiv {...inView({}, { duration: 0.5 })} className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {columns.map((col, c) => (
                <div key={c} className={`space-y-4 ${c === 1 ? "pt-12" : ""}`}>
                  {col.map((photo) => (
                    <MotionDiv
                      key={photo.alt}
                      {...inView(photo.from, { duration: 0.7, delay: photo.delay }, photo.to)}
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
                    </MotionDiv>
                  ))}
                </div>
              ))}
            </div>
          </MotionDiv>

          <div className="order-1 lg:order-2">
            <MotionDiv {...inView({ y: 30 }, { duration: 0.6 })}>
              <Eyebrow variant="plain">About Us</Eyebrow>
              <h2 className="type-title mb-8 leading-tight">
                Professional Repair Experts You Can Rely On
              </h2>
            </MotionDiv>
            <MotionDiv {...inView({ y: 20 }, { duration: 0.6, delay: 0.2 })}>
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
            </MotionDiv>
            <ul className="space-y-4">
              {about.points.map((point, i) => (
                <MotionLi
                  key={point}
                  {...inView({ x: -20 }, { duration: 0.4, delay: 0.3 + 0.1 * i })}
                  className="flex items-center space-x-3"
                >
                  <span className="shrink-0 rounded-full bg-accent p-1 text-white">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="font-bold text-ink-soft">{point}</span>
                </MotionLi>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
