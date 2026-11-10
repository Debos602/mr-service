import Image from "next/image";
import {
  BadgeIndianRupee,
  CircleCheck,
  Globe,
  House,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MotionDiv } from "@/components/ui/motion";
import { features, images, imageSizes, stats, type FeatureIcon } from "@/lib/content";
import { inView } from "@/lib/motion";

const icons: Record<FeatureIcon, typeof Zap> = {
  "shield-check": ShieldCheck,
  zap: Zap,
  "badge-indian-rupee": BadgeIndianRupee,
  globe: Globe,
  "circle-check": CircleCheck,
  house: House,
};

export function WhyUs() {
  return (
    <section id="why-us" className="overflow-hidden section-y bg-surface">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <MotionDiv {...inView({ y: 20 }, { duration: 0.6 })}>
              <Eyebrow diamondDelay={0.1} className="mb-6 md:mb-8">
                Why MR Services
              </Eyebrow>
              <h2 className="type-title mb-8 leading-tight">
                Trusted by Hundreds for Professional Quality Repairs
              </h2>
            </MotionDiv>

            <div className="grid gap-8 sm:grid-cols-2">
              {features.map((feature, i) => {
                const Icon = icons[feature.icon];
                return (
                  <MotionDiv
                    key={feature.title}
                    {...inView({ x: -30 }, { duration: 0.5, delay: 0.1 * i })}
                    className="group flex flex-col space-y-3"
                  >
                    <MotionDiv
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      transition={{ duration: 0.3 }}
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"
                    >
                      <Icon className="h-6 w-6" />
                    </MotionDiv>
                    <h3 className="text-xl font-black text-ink transition-colors duration-300 group-hover:text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-body">
                      {feature.description}
                    </p>
                  </MotionDiv>
                );
              })}
            </div>
          </div>

          <div className="relative mt-12 mb-10 lg:mt-0 lg:mb-0">
            <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-blob" />

            <MotionDiv
              {...inView({ y: 40, scale: 0.92 }, { duration: 0.8, ease: "easeOut" })}
              className="relative z-10 ml-auto aspect-[4/5] w-full overflow-hidden rounded-media border-[6px] border-white bg-line shadow-2xl shadow-line md:aspect-square md:rounded-panel md:border-8 lg:w-[90%]">
              <Image
                src={images.workshop.src}
                alt="Professional Electronics Repair Workshop"
                fill
                sizes={imageSizes.whyWorkshop}
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent" />
            </MotionDiv>

            <MotionDiv
              {...inView({ scale: 0.85, y: 30 }, { duration: 0.7, delay: 0.4 })}
              className="absolute -bottom-6 left-1/2 z-20 w-[90%] -translate-x-1/2 overflow-hidden rounded-3xl border-[3px] border-white bg-primary p-4 shadow-2xl shadow-blue-900/30 transition-transform duration-500 hover:rotate-0 sm:w-[80%] sm:p-6 md:w-[400px] lg:-bottom-8 lg:-left-12 lg:w-[450px] lg:translate-x-0 lg:-rotate-2 lg:border-4 lg:p-8">
              <div aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
              <div aria-hidden className="shimmer pointer-events-none absolute inset-0 rounded-3xl" />

              <div className="relative z-30 flex flex-row items-center justify-around text-center">
                {stats.map((stat, i) => (
                  <div key={stat.label.join(" ")} className="contents">
                    {i > 0 && (
                      <div aria-hidden className="mx-2 h-12 w-[2px] bg-gradient-to-b from-transparent via-white/30 to-transparent lg:mx-4 lg:h-16" />
                    )}
                    <MotionDiv
                      {...inView({ y: 20 }, { duration: 0.5, delay: 0.6 + 0.1 * i })}
                      className="flex flex-col items-center"
                    >
                      <div className="mb-1 text-4xl leading-none font-black tracking-tighter text-white drop-shadow-md sm:text-5xl lg:text-6xl">
                        {stat.value}
                        <span className="text-blue-400">{stat.suffix}</span>
                      </div>
                      <div className="mt-1 text-[9px] leading-none font-black tracking-widest text-white/80 uppercase sm:text-2xs lg:text-xs">
                        <p>{stat.label[0]}</p>
                        <p>{stat.label[1]}</p>
                      </div>
                    </MotionDiv>
                  </div>
                ))}
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
}
