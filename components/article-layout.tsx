'use client';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { AppContext } from '@/app/providers';
import { Prose } from '@/components/prose';
import { type ArticleWithSlug } from '@/lib/articles';
import { formatDate } from '@/lib/formatDate';
import { ArrowLeftIcon } from 'lucide-react';

export function ArticleLayout({
  article,
  children,
}: {
  article: ArticleWithSlug;
  children: React.ReactNode;
}) {
  let router = useRouter();
  let { previousPathname } = useContext(AppContext);

  return (
    <div className="max-w-5xl mx-auto border-l border-r py-12 relative">
      {previousPathname && (
        <span
          onClick={() => router.back()}
          className="absolute hover:cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors font-mono top-0 left-0 -translate-x-full font-bold text-lg border border-r-0 border-t-0  w-12 h-12 flex items-center justify-center"
        >
          <ArrowLeftIcon />
        </span>
      )}
      <article className="mx-auto max-w-2xl px-4 md:px-0">
        <header className="flex flex-col">
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl text-pretty">
            {article.title}
          </h1>
          <time
            dateTime={article.date}
            className="order-first font-mono flex items-center text-base text-muted-foreground"
          >
            <span className="h-4 w-0.5 rounded-full bg-muted-foreground" />
            <span className="ml-3">{formatDate(article.date)}</span>
          </time>
        </header>
        <Prose className="mt-8" data-mdx-content>
          {children}
        </Prose>
      </article>
    </div>
  );
}
