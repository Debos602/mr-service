import { Check, Quote, Star } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GradientText } from "@/components/ui/GradientText";
import { MotionDiv } from "@/components/ui/motion";
import { inView } from "@/lib/motion";
import { testimonials } from "@/lib/content";

type Review = (typeof testimonials)[number];

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="group relative flex w-[350px] flex-col rounded-media border border-line bg-white p-8 whitespace-normal shadow-soft transition-all duration-500 hover:-translate-y-3 hover:shadow-soft-hover md:w-[450px] md:p-10 cursor-grab">
      <Quote aria-hidden className="absolute top-8 right-8 z-0 size-15 text-line-soft transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:text-blue-50" />
      <div className="relative z-10 mb-6 flex" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} aria-hidden className="mr-0.5 size-4.5 fill-star text-star" />
        ))}
      </div>
      <blockquote className="relative z-10 mb-10 flex-grow text-lg leading-relaxed font-medium text-ink-soft">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <figcaption className="relative z-10 mt-auto flex items-center">
        <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-end text-lg font-black text-white shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
          {review.name.charAt(0)}
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <p className="text-lg font-black text-ink">{review.name}</p>
            <span className="rounded-full bg-green-100 p-0.5 text-green-700" title="Verified customer">
              <Check className="size-3.5" strokeWidth={3} />
            </span>
          </div>
          <p className="mt-0.5 text-xs font-bold tracking-widest text-accent uppercase">
            {review.area}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section className="relative overflow-hidden border-t border-line/60 section-y-lg bg-surface">
      <div className="relative z-10 container mb-16">
        <MotionDiv {...inView({ y: 30 }, { duration: 0.7 })} className="mx-auto max-w-3xl text-center">
          <Eyebrow both diamondDelay={0.2} className="mb-6 justify-center">
            Real Stories
          </Eyebrow>
          <h2 className="type-title mb-6 text-5xl leading-tight tracking-tight md:text-6xl">
            Loved by thousands across <GradientText>Vizag.</GradientText>
          </h2>
          <p className="text-lg text-body md:text-xl">
            Don&apos;t just take our word for it. Hear directly from the
            households who trust us to keep their essential electronics running
            smoothly.
          </p>
        </MotionDiv>
      </div>

      <div className="relative flex w-full flex-col items-center overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute top-0 left-0 z-20 h-full w-1/6 bg-gradient-to-r from-surface to-transparent md:w-1/4" />
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 z-20 h-full w-1/6 bg-gradient-to-l from-surface to-transparent md:w-1/4" />

        <div className="flex w-max animate-marquee pt-4 pb-12 hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1 || undefined}
              className="flex gap-6 pr-6 md:gap-8 md:pr-8"
            >
              {testimonials.map((review) => (
                <ReviewCard key={`${copy}-${review.name}`} review={review} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
