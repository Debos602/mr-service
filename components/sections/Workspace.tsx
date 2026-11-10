import Image from "next/image";
import { Camera } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MotionDiv } from "@/components/ui/motion";
import { inView } from "@/lib/motion";
import { images, imageSizes } from "@/lib/content";

const tileBase =
  "group relative overflow-hidden rounded-card bg-line";
const imgBase =
  "object-cover transition-transform duration-700 group-hover:scale-110";

export function Workspace() {
  return (
    <section className="section-y bg-surface">
      <div className="container">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <MotionDiv {...inView({ y: 30 }, { duration: 0.6 })} className="max-w-2xl">
            <Eyebrow variant="plain">Our Workspace</Eyebrow>
            <h2 className="type-title mb-6">
              Expert Repairs in Action
            </h2>
            <p className="text-lg text-body">
              Take a look at our professional repair environment and some of our
              recent work. Reliability you can see.
            </p>
          </MotionDiv>
          <MotionDiv
            {...inView({ scale: 0.8 }, { duration: 0.5, delay: 0.3 })}
            className="mb-2 flex w-fit items-center space-x-2 rounded-full border border-line-soft bg-white px-6 py-3 shadow-md">
            <Camera className="h-5 w-5 text-primary" />
            <span className="font-bold text-ink-soft">Recent Photos</span>
          </MotionDiv>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          <MotionDiv
            {...inView({ scale: 0.9 }, { duration: 0.7 })}
            className={`${tileBase} col-span-2 row-span-2 min-h-[400px]`}
          >
            <Image
              src={images.workshop.src}
              alt="MR SERVICES Diagnostic Center"
              fill
              sizes={imageSizes.workspaceMain}
              className={imgBase}
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/60 to-transparent p-8">
              <MotionDiv {...inView({ y: 20 }, { duration: 0.5, delay: 0.4 })}>
                <p className="text-2xl font-black text-white">Main Service Center</p>
                <p className="text-sm font-bold tracking-widest text-white/70 uppercase">
                  Visakhapatnam Branch
                </p>
              </MotionDiv>
            </div>
          </MotionDiv>

          <MotionDiv {...inView({ y: 30 }, { duration: 0.5, delay: 0.2 })} className={`${tileBase} min-h-[200px]`}>
            <Image src={images.appliance.src} alt="Branded Appliance Repair" fill sizes={imageSizes.workspaceAppliance} className={imgBase} />
            <div className="absolute inset-0 bg-ink/10 transition-colors group-hover:bg-transparent" />
          </MotionDiv>

          <MotionDiv {...inView({ y: 30 }, { duration: 0.5, delay: 0.35 })} className={`${tileBase} min-h-[200px]`}>
            <Image src={images.tv.src} alt="Expert LED TV Repair" fill sizes={imageSizes.workspaceTv} className={imgBase} />
            <div className="absolute inset-0 bg-ink/10 transition-colors group-hover:bg-transparent" />
          </MotionDiv>

          <MotionDiv
            {...inView({ y: 30 }, { duration: 0.6, delay: 0.45 })}
            className={`${tileBase} col-span-2 min-h-[200px]`}
          >
            <Image src={images.lab.src} alt="Diagnostic Laboratory - MR SERVICES" fill sizes={imageSizes.workspaceLab} className={imgBase} />
            <div className="absolute inset-0 flex items-center bg-gradient-to-r from-ink/50 to-transparent p-8">
              <MotionDiv {...inView({ x: -20 }, { duration: 0.5, delay: 0.6 })}>
                <p className="text-2xl font-black text-white">Precision Testing</p>
                <p className="text-sm font-bold tracking-widest text-white/70 uppercase">
                  Advanced Equipment
                </p>
              </MotionDiv>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
