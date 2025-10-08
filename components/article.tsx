import type { ArticleWithSlug } from '@/lib/articles';
import { formatDate } from '@/lib/formatDate';
import Link from 'next/link';
import { Button } from './ui/button';
import { ChevronRightIcon } from 'lucide-react';

export function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="@container">
      <div className="@xl:grid @xl:grid-cols-4 @xl:items-start">
        <Link
          href={`/articles/${article.slug}`}
          className="group @xl:col-span-3"
        >
          <div className="space-y-3 p-6 hover:bg-accent hover:text-accent-foreground transition-colors">
            <div className="relative @2xl:hidden font-mono z-10 order-first mb-3 flex items-center text-sm text-muted-foreground pl-3.5">
              <span
                className="absolute inset-y-0 left-0 flex items-center"
                aria-hidden="true"
              >
                <span className="h-4 w-0.5 rounded-full bg-muted-foreground" />
              </span>

              {formatDate(article.date)}
            </div>
            <h3 className="leading-none font-semibold">{article.title}</h3>
            <p className="text-muted-foreground text-sm">
              {article.description}
            </p>
            <Button
              variant="link"
              className="cursor-pointer group-hover:underline"
            >
              Read article
              <ChevronRightIcon />
            </Button>
          </div>
        </Link>
        <div className="order-first border-r h-full @max-2xl:hidden p-6">
          <div className="@max-2xl:hidden font-mono flex items-center text-sm text-muted-foreground">
            {formatDate(article.date)}
          </div>
        </div>
      </div>
    </article>
  );
}
