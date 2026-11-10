import { ArrowRight, Laptop, Settings, Smartphone, Speaker, Tv } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { bookServiceHref, services, telHref, type ServiceIcon } from "@/lib/content";

const icons: Record<ServiceIcon, typeof Laptop> = {
  laptop: Laptop,
  smartphone: Smartphone,
  tv: Tv,
  settings: Settings,
  speaker: Speaker,
};

export function Services() {
  return (
    <section id="services" className="section-y bg-white">
      <div className="container">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <Eyebrow variant="plain">Our Expertise</Eyebrow>
          <h2 className="type-title mb-6">
            Expert Repair Services for Your Home &amp; Office
          </h2>
          <p className="text-lg text-body">
            We specialize in repairing all major electronics and household
            appliances with genuine parts and expert precision.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal
                key={service.title}
                delay={i * 0.08}
                className="group rounded-card border border-line-soft bg-surface p-8 transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-2xl hover:shadow-blue-100"
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${service.tint}`}
                >
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="type-card-title mb-4">
                  {service.title}
                </h3>
                <p className="mb-6 leading-relaxed text-body">
                  {service.description}
                </p>
                <a
                  href={bookServiceHref(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-bold text-primary transition-transform duration-300 group-hover:translate-x-2"
                >
                  <span>Book Service</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                  <span className="sr-only"> for {service.title}</span>
                </a>
              </Reveal>
            );
          })}

          <Reveal
            delay={services.length * 0.08}
            className="relative flex flex-col justify-center overflow-hidden rounded-card bg-primary p-8 text-white"
          >
            <div aria-hidden className="shimmer pointer-events-none absolute inset-0" />
            <h3 className="relative z-10 mb-4 text-3xl font-black">
              Need Something Else?
            </h3>
            <p className="relative z-10 mb-8 text-blue-100">
              We repair all major electronics and brands. Contact us to inquire
              about specific repairs.
            </p>
            <a
              href={telHref}
              className="relative z-10 flex items-center justify-center space-x-2 rounded-xl bg-white px-6 py-4 font-bold text-primary transition-all duration-300 hover:scale-105 hover:bg-blue-50 active:scale-95"
            >
              <span>Speak to Expert</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
