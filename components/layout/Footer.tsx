import Image from "next/image";
import { Camera, Clock, Globe, Mail, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { footer, site, telHref, whatsappHref } from "@/lib/content";

const socialClass =
  "rounded-full border border-blue-200 bg-blue-50 p-3 text-accent transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-accent hover:bg-accent hover:text-white hover:shadow-glow-lg";

const contactItems = [
  { icon: Phone, label: "Call Us", value: site.phoneDisplay, href: telHref },
  { icon: MapPin, label: "Headquarters", value: site.location },
  { icon: Clock, label: "Operating Hours", value: site.hoursLong },
  { icon: Mail, label: "Email Us", value: site.email, href: `mailto:${site.email}` },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-white pt-24 pb-8 text-slate-800">
      <div aria-hidden className="pointer-events-none absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-blob-lg" />
      <div aria-hidden className="pointer-events-none absolute top-1/2 left-0 h-[400px] w-[400px] rounded-full bg-indigo-100/40 blur-blob" />

      <div className="relative z-10 container">
        <div className="mb-20 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-8 lg:col-span-4 lg:pr-8">
            <a href="#" className="group flex items-center" aria-label={`${site.name} home`}>
              <div className="w-fit rounded-xl px-5 py-3 shadow-md ring-1 ring-line transition-all duration-300 group-hover:shadow-blue-200">
                <Image
                  src={site.logo.src}
                  alt="MR Services Logo"
                  width={site.logo.width}
                  height={site.logo.height}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </a>
            <p className="text-lg leading-relaxed font-medium text-muted">{footer.tagline}</p>
            <div className="flex space-x-4 pt-4">
              <a href={site.social.instagram} aria-label="Instagram" className={socialClass}>
                <Camera className="h-5 w-5" />
              </a>
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={socialClass}>
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a href={site.social.website} aria-label="Website" className={socialClass}>
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-8 text-lg font-black tracking-wide text-ink">Company</h3>
            <ul className="space-y-4 font-medium">
              {footer.company.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="group flex items-center text-muted transition-colors hover:text-accent">
                    <span aria-hidden className="mr-0 w-0 overflow-hidden text-accent transition-all duration-300 group-hover:mr-2 group-hover:w-4">
                      ▹
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-8 text-lg font-black tracking-wide text-ink">Specialties</h3>
            <ul className="space-y-4 font-medium">
              {footer.specialties.map((item) => (
                <li key={item} className="group flex cursor-default items-center text-muted">
                  <span aria-hidden className="mr-3 h-1.5 w-1.5 rounded-full bg-blue-400 transition-all duration-300 group-hover:scale-150 group-hover:bg-accent" />
                  <span className="transition-colors group-hover:text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-8 text-lg font-black tracking-wide text-ink">Get in Touch</h3>
            <ul className="space-y-6">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="group flex items-start">
                  <div className="mr-4 shrink-0 rounded-lg border border-blue-200 bg-blue-50 p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400 group-hover:bg-blue-100">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="mb-1 text-xs font-bold tracking-widest text-faint uppercase">{label}</p>
                    {href ? (
                      <a href={href} className="block font-bold break-all text-ink-soft transition-colors hover:text-accent">
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-ink-soft">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-line pt-8 md:flex-row">
          <p className="text-sm font-bold text-faint">
            © {site.copyrightYear} {site.name}. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm font-bold text-faint">
            <a href="#" className="transition-colors hover:text-accent">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-accent">Terms of Service</a>
          </div>
        </div>
        <div className="mt-6 border-t border-line-soft pt-5 text-center">
          <p className="text-[11px] font-medium tracking-wide text-slate-300 select-none">
            {site.poweredBy}
          </p>
        </div>
      </div>
    </footer>
  );
}
