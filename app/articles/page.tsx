import { type Metadata } from 'next';

import { Article } from '@/components/article';
import { getAllArticles } from '@/lib/articles';

// Force static generation at build time
export const dynamic = 'force-static';
export const revalidate = false;

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
