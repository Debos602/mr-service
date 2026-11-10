import Image from "next/image";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { hero, images, telHref, whatsappHref } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-surface pt-20">
      <div aria-hidden className="absolute top-0 right-0 -mt-20 -mr-20 h-1/3 w-1/3 rounded-full bg-blue-100 opacity-50 blur-blob-lg" />
      <div aria-hidden className="absolute bottom-0 left-0 -mb-20 -ml-20 h-1/4 w-1/4 rounded-full bg-blue-200 opacity-40 blur-blob" />

      <div className="relative z-10 container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal x={-30} y={0}>
            <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-accent-soft px-4 py-2 text-sm font-bold tracking-wide text-blue-700 uppercase">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              <span>{hero.badge}</span>
            </div>

            <h1 className="type-display mb-6">
              {hero.titleStart} <br />
              <span className="text-primary">{hero.titleAccent}</span> <br />
              {hero.titleEnd}
            </h1>

            <p className="type-lead mb-10 max-w-xl">
              {hero.lead}
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg btn-whatsapp w-full hover:shadow-green-200 sm:w-auto"
              >
                <MessageCircle className="h-6 w-6" />
                <span>WhatsApp Expert</span>
              </a>
              <a
                href={telHref}
                className="btn btn-lg btn-primary w-full hover:shadow-blue-200 sm:w-auto"
              >
                <Phone className="h-6 w-6" />
                <span>Call Now</span>
              </a>
            </div>

            <p className="mt-8 flex items-center text-sm font-bold text-faint">
              <ArrowRight className="mr-2 h-4 w-4 text-primary" />
              {hero.note}
            </p>
          </Reveal>

          <Reveal className="relative hidden lg:block" x={30} y={0} delay={0.2}>
            <div className="group relative z-10 overflow-hidden rounded-media border-8 border-white shadow-2xl">
              <Image
                src={images.hero.src}
                width={images.hero.width}
                height={images.hero.height}
                alt="MR SERVICES Professional Technician"
                priority
                sizes="(min-width: 1280px) 600px, 50vw"
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
            </div>

            <div className="absolute -bottom-6 -left-6 z-20 rounded-2xl border border-line-soft bg-white p-6 shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-green-100 p-3 text-green-600">
                  <ArrowRight className="h-6 w-6 -rotate-45" />
                </div>
                <div>
                  <p className="text-2xl font-black text-ink">{hero.rating}</p>
                  <p className="text-sm font-bold tracking-wider text-muted uppercase">
                    {hero.ratingLabel}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 z-20 rounded-2xl bg-primary px-5 py-3 text-sm font-black tracking-wider text-white uppercase shadow-xl">
              {hero.sameDay}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
