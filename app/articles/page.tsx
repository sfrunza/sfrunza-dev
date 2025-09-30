import { type Metadata } from 'next';

import { Button } from '@/components/ui/button';
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles';
import { formatDate } from '@/lib/formatDate';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
  alternates: {
    canonical: {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/articles`,
    },
  },
};

export default async function ArticlesIndex() {
  let articles = await getAllArticles();

  return (
    <>
      {/* Hero section */}
      <section className="border-b">
        <div className="max-w-5xl mx-auto border-l border-r px-10 py-18 bg-[linear-gradient(90deg,var(--muted)_1px,transparent_1px),linear-gradient(var(--muted)_1px,transparent_1px)] bg-[size:18px_18px]">
          <header className="max-w-2xl">
            <h1 className="text-5xl font-bold tracking-tight sm:text-5xl">
              Articles
            </h1>
          </header>
        </div>
      </section>

      {/* Divider */}
      <section className="border-b">
        <div className="h-9 max-w-5xl mx-auto border-l border-r"></div>
      </section>

      {/* Articles section */}
      <section className=" border-b">
        <div className="max-w-5xl mx-auto border-l border-r">
          <div className="flex flex-col divide-y">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <section>
        <div className="h-9 max-w-5xl mx-auto border-l border-r"></div>
      </section>
    </>
  );
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-start">
      <Link href={`/articles/${article.slug}`} className="group md:col-span-3">
        <div className="space-y-3 p-6 hover:bg-accent hover:text-accent-foreground transition-colors">
          <div className="relative md:hidden font-mono z-10 order-first mb-3 flex items-center text-sm text-muted-foreground pl-3.5">
            <span
              className="absolute inset-y-0 left-0 flex items-center"
              aria-hidden="true"
            >
              <span className="h-4 w-0.5 rounded-full bg-muted-foreground" />
            </span>

            {formatDate(article.date)}
          </div>
          <h3 className="leading-none font-semibold">{article.title}</h3>
          <p className="text-muted-foreground text-sm">{article.description}</p>
          <Button
            variant="link"
            className="cursor-pointer group-hover:underline"
          >
            Read article
            <ChevronRightIcon />
          </Button>
        </div>
      </Link>
      <div className="order-first border-r h-full max-md:hidden p-6">
        <div className="max-md:hidden font-mono flex items-center text-sm text-muted-foreground">
          {formatDate(article.date)}
        </div>
      </div>
    </article>
  );
}
