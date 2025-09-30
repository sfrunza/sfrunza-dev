import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="h-full">
      <div className="max-w-5xl mx-auto border-x h-full px-10 py-18 bg-[linear-gradient(90deg,var(--muted)_1px,transparent_1px),linear-gradient(var(--muted)_1px,transparent_1px)] bg-[size:18px_18px]">
        <div className="flex flex-col gap-4 justify-center items-center h-full w-full">
          <p className="text-base font-mono font-semibold text-muted-foreground">
            404
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="text-base text-muted-foreground">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <Button variant="outline" asChild>
            <Link href="/">Go back home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
