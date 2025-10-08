import imageHopper from '@/assets/projects/hopper-calendar-clone.png';
import { GitHubIcon } from '@/components/social-icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ExternalLinkIcon } from 'lucide-react';
import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    name: "Hopper's calendar clone",
    description: "A clone of Hopper's calendar with rates and availability.",
    githubLink: 'https://github.com/sfrunza/hopper-calendar-clone',
    livePreviewLink: 'https://hopper-calendar-clone.pages.dev',
    image: imageHopper,
  },
];

export const metadata: Metadata = {
  title: 'Projects',
  description: "Things I've made trying to put my dent in the universe.",
  alternates: {
    canonical: {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects`,
    },
  },
};

export default function Projects() {
  return (
    <>
      {/* Hero section */}
      <section className="border-b ">
        <div className="max-w-5xl relative mx-auto border-l border-r px-10 py-18 bg-[linear-gradient(90deg,var(--muted)_1px,transparent_1px),linear-gradient(var(--muted)_1px,transparent_1px)] bg-[size:18px_18px]">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Things I've made trying to put my dent in the universe.
          </h1>
          <p className="mt-6 text-base text-muted-foreground">
            I've worked on tons of little projects over the years but these are
            the ones that I'm most proud of. Many of them are open-source, so if
            you see something that piques your interest, check out the code and
            contribute if you have ideas for how it can be improved.
          </p>
          <code className="text-xs font-mono text-muted-foreground absolute bottom-4 right-4">
            npm run <span className="text-muted-foreground/50">build</span>
          </code>
        </div>
      </section>

      {/* Divider */}
      <section className="border-b">
        <div className="h-9 max-w-5xl mx-auto border-l border-r"></div>
      </section>

      {/* Projects section */}
      <section className="border-b relative">
        <div className="max-w-5xl mx-auto border-l relative border-r">
          <span className="absolute font-mono top-0 left-0 -translate-x-full font-bold text-lg border border-r-0 border-t-0  w-12 h-12 flex items-center justify-center">
            01
          </span>
          <code className="text-xs text-muted-foreground absolute top-4 right-4">
            projects.json
          </code>
          <div className="p-6 sm:p-8 space-y-2 border-b border-dashed relative">
            <h2 className="text-2xl font-bold">Projects</h2>
          </div>
          <ul
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <li
                key={project.name}
                className={cn(
                  'border-r border-b transition-colors group flex flex-col justify-between relative',
                  'last:border-r-0 last:border-b-0',
                  'sm:[&:nth-last-child(-n+2)]:border-b-0 sm:last:border-r-0',
                  'lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0',
                  'hover:bg-accent'
                )}
              >
                {project.image && (
                  <div className="relative h-96 md:h-48 w-full">
                    <Image
                      fill
                      src={project.image}
                      alt={project.name}
                      objectFit="cover"
                      objectPosition="center"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-bold text-lg">{project.name}</h3>
                  <p className="flex-grow">{project.description}</p>
                </div>
                <div className="flex gap-2 p-4 border-t border-border/40">
                  <Button asChild variant="outline">
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                      <GitHubIcon />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link
                      href={project.livePreviewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live preview
                      <ExternalLinkIcon />
                    </Link>
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Divider */}
      <section>
        <div className="h-9 max-w-5xl mx-auto border-l border-r"></div>
      </section>
    </>
  );
}
