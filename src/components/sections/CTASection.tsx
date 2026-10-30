
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FolderOpen,
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/mkjjvggr", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/10 blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-1/2 h-[300px] w-[400px] -translate-y-1/2 rounded-full bg-circuit/10 blur-[120px]"
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-surface/60 px-6 py-12 backdrop-blur-sm sm:px-12 sm:py-16"
        >
          <div className="text-center">
            <span className="text-sm font-extrabold uppercase tracking-[0.25em] text-signal">
              Contact Iconic Hub
            </span>

            <h2 className="mt-4 text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
              Let's Build Something Great Together
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-slate-400">
              Tell us about your project and the service you need. Whether
              it's cybersecurity, web development, or both, we'd love to
              hear from you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-white/10 bg-background/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-signal"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/10 bg-background/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-signal"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="service"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Which service do you need? *
              </label>

              <select
                id="service"
                name="service"
                required
                defaultValue=""
                className="w-full rounded-xl border border-white/10 bg-background/70 px-4 py-3 text-white outline-none transition focus:border-signal"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="Web Development">Web Development</option>
                <option value="Both Services">
                  Both Cybersecurity and Web Development
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Project Subject *
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="e.g. Business Website Development"
                required
                className="w-full rounded-xl border border-white/10 bg-background/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-signal"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Tell us about your project *
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Describe your project, requirements, goals, or the problem you want us to solve..."
                required
                className="w-full resize-y rounded-xl border border-white/10 bg-background/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-signal"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  Sending Enquiry...
                  <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                </>
              ) : (
                <>
                  Send Project Enquiry
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>

            {status === "success" && (
              <div
                role="status"
                className="flex items-start gap-3 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-400"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <p>
                  Thank you for contacting Iconic Hub! Your enquiry has been
                  submitted successfully. We'll get back to you soon.
                </p>
              </div>
            )}

            {status === "error" && (
              <div
                role="alert"
                className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400"
              >
                <AlertCircle className="h-5 w-5 shrink-0" />
                <p>
                  Sorry, we couldn't submit your enquiry. Please try again
                  or contact us directly on WhatsApp.
                </p>
              </div>
            )}

            <p className="text-center text-xs leading-relaxed text-slate-500">
              Your project details will be sent securely through our enquiry
              form.
            </p>

            <div className="relative flex items-center gap-4 py-2">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs uppercase tracking-widest text-slate-500">
                Or contact us directly
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <a
              href="https://wa.me/2349054151444?text=Hello%20Iconic%20Hub%2C%20I%20would%20like%20to%20make%20a%20project%20enquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 font-semibold text-white transition hover:bg-[#20BD5A]"
            >
              <MessageCircle className="h-5 w-5" />
              Contact Us on WhatsApp
            </a>
          </form>

          <div className="mt-10 border-t border-white/10 pt-8 text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <FolderOpen className="mr-2 h-4 w-4" />
              View Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
