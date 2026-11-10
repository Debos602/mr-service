import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { site, telHref, whatsappHref } from "@/lib/content";

type InfoRowProps = {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
  large?: boolean;
};

function InfoRow({ icon, label, value, href, large }: InfoRowProps) {
  const inner = (
    <>
      <div
        className={`mr-6 shrink-0 rounded-2xl bg-line-soft p-4 transition-colors duration-300 ${
          href ? "text-accent group-hover:bg-accent group-hover:text-white" : "text-body"
        }`}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p className="type-label mb-1">{label}</p>
        <p
          className={`font-black ${value.includes("@") ? "break-all" : "break-words"} ${large ? "text-2xl" : "text-xl"} ${
            href ? "text-ink transition-colors group-hover:text-accent" : "text-slate-800"
          }`}
        >
          {value}
        </p>
      </div>
    </>
  );

  const base = "flex items-center rounded-card border border-line bg-white p-6";
  return href ? (
    <a
      href={href}
      className={`${base} group transition-all duration-300 hover:border-blue-400 hover:shadow-lift-lg`}
    >
      {inner}
    </a>
  ) : (
    <div className={`${base} shadow-sm`}>{inner}</div>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line-soft section-y-lg bg-white"
    >
      <div aria-hidden className="pointer-events-none absolute top-0 right-0 -mt-64 -mr-64 h-[600px] w-[600px] rounded-full bg-blue-100/50 blur-blob" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 -mb-64 -ml-64 h-[600px] w-[600px] rounded-full bg-indigo-50/50 blur-blob" />

      <div className="relative z-10 container">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow className="mb-8">Contact Us</Eyebrow>
              <h2 className="type-display mb-6">
                Ready to get your <GradientText>service?</GradientText>
              </h2>
              <p className="type-lead mb-12 max-w-lg font-medium">
                Skip the long forms. Chat with us directly on WhatsApp or give us
                a quick call, and we will send a technician straight to your
                location.
              </p>
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={0.05}>
                <InfoRow icon={<Phone className="h-6 w-6" />} label="Call Us Directly" value={site.phone} href={telHref} large />
              </Reveal>
              <Reveal delay={0.1}>
                <InfoRow icon={<MapPin className="h-6 w-6" />} label="Our Location" value={`${site.location}.`} />
              </Reveal>
              <Reveal delay={0.15}>
                <InfoRow icon={<Clock className="h-6 w-6" />} label="Working Hours" value={site.hours} />
              </Reveal>
              <Reveal delay={0.2}>
                <InfoRow icon={<Mail className="h-6 w-6" />} label="Email Us" value={site.email} href={`mailto:${site.email}`} />
              </Reveal>
            </div>
          </div>

          <Reveal className="relative lg:col-span-6" x={30} y={0} delay={0.2}>
            <div className="relative isolate overflow-hidden rounded-panel border border-line-soft bg-white p-10 shadow-panel md:p-14">
              <div aria-hidden className="pointer-events-none absolute top-0 right-0 -z-10 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-green-500/5 blur-3xl" />
              <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 -z-10 h-64 w-64 -translate-x-1/3 translate-y-1/3 rounded-full bg-blue-500/5 blur-3xl" />

              <h3 className="mb-4 text-center text-3xl font-black text-ink sm:text-left md:text-4xl">
                Book instantly.
              </h3>
              <p className="mb-10 text-center text-base leading-relaxed font-medium text-muted sm:text-left md:text-lg">
                The fastest way to reach us. Tap below to securely open an
                immediate WhatsApp conversation with our expert engineers right
                now.
              </p>

              <div className="space-y-5">
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-xl btn-whatsapp hover:shadow-wa-glow"
                >
                  <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href={telHref}
                  className="btn btn-xl btn-ink hover:shadow-ink-glow"
                >
                  <Phone className="h-6 w-6 text-slate-300 md:h-7 md:w-7" />
                  <span>Call {site.phone}</span>
                </a>
              </div>

              <div className="mt-10 flex flex-col items-center gap-4 border-t border-line-soft pt-8 text-center sm:flex-row sm:justify-between sm:gap-0 sm:text-left md:mt-12 md:pt-10">
                <div>
                  <p className="mb-1 text-xs font-bold tracking-widest text-faint uppercase md:text-sm">
                    Supported Devices
                  </p>
                  <p className="text-base font-black text-slate-800 md:text-lg">All Major Brands</p>
                </div>
                <div className="shrink-0 rounded-2xl border border-blue-100 bg-blue-50 px-5 py-3 text-xs font-black tracking-widest text-blue-700 uppercase md:text-sm">
                  Fast Repair
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
