import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Code2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";

const POSTS = [
  {
    title: "Ethical hacking lessons from a modern web stack",
    category: "Security",
    description:
      "A concise post on my latest penetration test, the main risks I found, and the remediation path I recommended.",
    icon: ShieldCheck,
  },
  {
    title: "Building responsive brand websites that perform",
    category: "Web Development",
    description:
      "How I structure frontend work for speed, accessibility, and polished user experience across devices.",
    icon: Code2,
  },
  {
    title: "Why Iconic Hub is my personal tech brand",
    category: "Brand",
    description:
      "A quick look at the thinking behind the portfolio and how I keep every project personal and practical.",
    icon: FileText,
  },
];

export function BlogPreview() {
  return (
    <section id="blog" className="relative py-28">
      <div className="container">
        <SectionHeading
          eyebrow="From the blog"
          title="Stories from the portfolio"
          description="Quick reads that explain how I solve problems in cybersecurity, web development, and personal brand work."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {POSTS.map((post, index) => {
            const Icon = post.icon;
            return (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6 }}
              >
                <Card className="border border-white/10 bg-surface/60">
                  <CardHeader>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-signal">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="mt-6 text-xl text-white">{post.title}</CardTitle>
                    <CardDescription className="mt-3 text-slate-400">
                      {post.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400">
                        {post.category}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-fit px-0 hover:px-3 hover:bg-white/5"
                        onClick={() => (window.location.hash = "#contact")}
                      >
                        Read post
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
