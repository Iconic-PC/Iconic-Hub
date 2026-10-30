
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ShieldCheck,
  RefreshCw,
  CalendarDays,
  Newspaper,
  AlertCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Article {
  title: string;
  description: string;
  source: string;
  url: string;
  publishedAt: string | null;
  category: string;
}

const API_URL = import.meta.env.VITE_CYBER_NEWS_API;

const categoryIcon = (category: string) => {
  const value = category.toLowerCase();

  if (
    value.includes("malware") ||
    value.includes("ransomware") ||
    value.includes("threat")
  ) {
    return ShieldCheck;
  }

  return Newspaper;
};

const formatDate = (date: string | null) => {
  if (!date) return "Date unavailable";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return "Date unavailable";
  }

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(parsed);
};

export function BlogPreview() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const loadArticles = useCallback(async () => {
    if (!API_URL) {
      setError("The cybersecurity news feed has not been configured yet.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(API_URL, {
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Unable to retrieve the latest articles.");
      }

      const data = await response.json();

      if (!Array.isArray(data.articles)) {
        throw new Error("The news service returned an invalid response.");
      }

      setArticles(data.articles);
      setLastUpdated(new Date());
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while loading articles."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadArticles();

    const interval = window.setInterval(() => {
      loadArticles();
    }, 10 * 60 * 1000);

    return () => window.clearInterval(interval);
  }, [loadArticles]);

  return (
    <section id="blog" className="relative py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Cybersecurity Insights"
          title="Latest from the Cybersecurity World"
          description="Stay informed with recent cybersecurity news, vulnerability discoveries, malware reports, security research and industry developments."
        />

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Automatically updated news feed
          </div>

          <div className="flex items-center gap-3">
            {lastUpdated && (
              <span className="text-xs text-slate-500">
                Updated {lastUpdated.toLocaleTimeString()}
              </span>
            )}

            <Button
              variant="outline"
              size="sm"
              onClick={loadArticles}
              disabled={loading}
              className="border-white/10 text-slate-300 hover:bg-white/5"
            >
              <RefreshCw
                className={`mr-2 h-4 w-4 ${loading ? "animate-spin" : ""}`}
              />
              Refresh
            </Button>
          </div>
        </div>

        {loading && articles.length === 0 && (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-64 animate-pulse rounded-xl border border-white/10 bg-white/5"
              />
            ))}
          </div>
        )}

        {error && articles.length === 0 && (
          <div className="mt-10 rounded-xl border border-red-500/20 bg-red-500/5 p-6">
            <div className="flex items-center gap-3 text-red-300">
              <AlertCircle className="h-5 w-5" />
              <p className="font-medium">News feed unavailable</p>
            </div>

            <p className="mt-2 text-sm text-slate-400">{error}</p>

            <Button
              size="sm"
              variant="outline"
              onClick={loadArticles}
              className="mt-4 border-white/10"
            >
              Try again
            </Button>
          </div>
        )}

        {!loading && !error && articles.length === 0 && (
          <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-8 text-center">
            <Newspaper className="mx-auto h-8 w-8 text-signal" />
            <p className="mt-4 text-white">No articles available right now.</p>
            <p className="mt-2 text-sm text-slate-400">
              Please check again shortly.
            </p>
          </div>
        )}

        {articles.length > 0 && (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, 6).map((article, index) => {
              const Icon = categoryIcon(article.category);

              return (
                <motion.div
                  key={article.url}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="flex h-full flex-col border border-white/10 bg-surface/60 transition-colors hover:border-signal/30">
                    <CardHeader>
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-signal">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-signal">
                          {article.category}
                        </span>

                        <span className="text-xs text-slate-500">
                          {article.source}
                        </span>
                      </div>

                      <CardTitle className="mt-3 text-lg leading-snug text-white">
                        {article.title}
                      </CardTitle>

                      <CardDescription className="mt-2 line-clamp-4 text-sm leading-relaxed text-slate-400">
                        {article.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="mt-auto pt-0">
                      <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                        <span className="flex items-center gap-2 text-xs text-slate-500">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {formatDate(article.publishedAt)}
                        </span>

                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-signal transition-colors hover:text-white"
                          aria-label={`Read ${article.title} from ${article.source}`}
                        >
                          Read article
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500">
            News headlines and summaries are attributed to their original
            publishers. Full articles remain on their respective websites.
          </p>
        </div>
      </div>
    </section>
  );
}
