import { useState } from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function FeaturedProjects() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="projects" className="relative py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Meet the Founder"
          title="Ndukwe Obinna Goodluck"
          description="A creative leader shaping bold digital experiences with clarity, craft, and confidence. Discover the vision behind Iconic Hub."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="space-y-6 text-slate-300">
            <p className="text-lg leading-8">
              Ndukwe Obinna Goodluck is the founder and driving force behind Iconic Hub. With a passion for 
              digital storytelling and a commitment to excellence, Ndukwe builds experiences that blend strategic thinking,
              polished design, and modern engineering.
            </p>
            <p className="text-lg leading-8">
              His work focuses on helping brands and businesses stand out online through thoughtful websites, resilient
              cybersecurity principles, and user-centered digital products that look exceptional and perform reliably.
            </p>
            <p className="text-lg leading-8">
              As a brand owner, Ndukwe combines creative leadership with practical delivery to make every project feel
              iconic, memorable, and built to last.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-xl shadow-slate-950/20">
            {!imageError ? (
              <img
                src="/founder.jpg"
                alt="Ndukwe Obinna Goodluck"
                onError={() => setImageError(true)}
                className="h-full w-full min-h-[320px] object-cover"
              />
            ) : (
              <div className="flex h-full min-h-[320px] items-center justify-center bg-slate-900/70 text-center text-slate-400">
                <div className="space-y-2 px-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                    Founder image unavailable
                  </p>
                  <p className="text-sm leading-relaxed">
                    Add `public/founder.jpg` to display Ndukwe’s photo in this section.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
