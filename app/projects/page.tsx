import { type Metadata } from "next";
import Image from "next/image";
import logoAnimaginary from "@/images/logos/animaginary.svg";
import logoCosmos from "@/images/logos/cosmos.svg";
import logoHelioStream from "@/images/logos/helio-stream.svg";
import logoOpenShuttle from "@/images/logos/open-shuttle.svg";
import logoPlanetaria from "@/images/logos/planetaria.svg";
import { cn } from "@/lib/utils";
import { LinkIcon } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    name: "Planetaria",
    description:
      "Creating technology to empower civilians to explore space on their own terms.",
    link: { href: "http://planetaria.tech", label: "planetaria.tech" },
    logo: logoPlanetaria,
  },
  {
    name: "Animaginary",
    description:
      "High performance web animation library, hand-written in optimized WASM.",
    link: { href: "#", label: "github.com" },
    logo: logoAnimaginary,
  },
  {
    name: "HelioStream",
    description:
      "Real-time video streaming library, optimized for interstellar transmission.",
    link: { href: "#", label: "github.com" },
    logo: logoHelioStream,
  },
  {
    name: "cosmOS",
    description:
      "The operating system that powers our Planetaria space shuttles.",
    link: { href: "#", label: "github.com" },
    logo: logoCosmos,
  },
  {
    name: "OpenShuttle",
    description:
      "The schematics for the first rocket I designed that successfully made it to orbit.",
    link: { href: "#", label: "github.com" },
    logo: logoOpenShuttle,
  },
  {
    name: "OpenShuttle1",
    description:
      "The schematics for the first rocket I designed that successfully made it to orbit.",
    link: { href: "#", label: "github.com" },
    logo: logoOpenShuttle,
  },
];

export const metadata: Metadata = {
  title: "Projects",
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
            <p className="text-muted-foreground max-w-2xl">
              We are the creators, maintainers, and contributors of some of the
              most critical infrastructure projects in the JavaScript ecosystem.
            </p>
          </div>
          <ul
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <li
                key={project.name}
                className={cn(
                  "border-r border-b p-4 transition-colors group flex flex-col gap-2",
                  "last:border-r-0 last:border-b-0",
                  "sm:[&:nth-last-child(-n+2)]:border-b-0 sm:last:border-r-0",
                  "lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0",
                  "hover:bg-accent",
                )}
              >
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
                <h3 className="font-bold text-lg">{project.name}</h3>
                <p className="flex-grow">{project.description}</p>
                <Link
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 mt-6 flex text-sm font-medium text-muted-foreground transition group-hover:text-primary"
                >
                  <LinkIcon className="h-5 w-5 flex-none" />
                  <span className="ml-2">{project.link.label}</span>
                </Link>
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
