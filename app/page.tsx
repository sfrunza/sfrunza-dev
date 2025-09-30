import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/social-icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import logoAirbnb from "@/images/logos/airbnb.svg";
import logoFacebook from "@/images/logos/facebook.svg";
import logoPlanetaria from "@/images/logos/planetaria.svg";
import logoStarbucks from "@/images/logos/starbucks.svg";
import { type ArticleWithSlug, getAllArticles } from "@/lib/articles";
import { formatDate } from "@/lib/formatDate";
import { cn } from "@/lib/utils";
import {
  ArrowDownIcon,
  BriefcaseBusinessIcon,
  ChevronRightIcon,
  MailIcon,
} from "lucide-react";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Link href={`/articles/${article.slug}`} className="group">
      <Card className="h-full transition-all border-none duration-200 hover:bg-accent hover:text-accent-foreground">
        <CardHeader>
          <div
            className={cn(
              "font-mono",
              "relative z-10 order-first mb-3 flex items-center text-sm text-muted-foreground",
              true && "pl-3.5",
            )}
          >
            <span
              className="absolute inset-y-0 left-0 flex items-center"
              aria-hidden="true"
            >
              <span className="h-4 w-0.5 rounded-full bg-muted-foreground" />
            </span>

            {formatDate(article.date)}
          </div>
          <CardTitle>{article.title}</CardTitle>
          <CardDescription>{article.description}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button variant="link" className="cursor-pointer">
            Read article
            <ChevronRightIcon />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-muted-foreground transition group-hover:fill-primary" />
    </Link>
  );
}

function Newsletter() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MailIcon className="h-6 w-6 flex-none text-muted-foreground" />
          Stay up to date
        </CardTitle>
        <CardDescription>
          Get notified when I publish something new, and unsubscribe at any
          time.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action="/thank-you">
          <div className="mt-6 flex items-center">
            <span className="flex min-w-0 flex-auto p-px">
              <Input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                required
              />
            </span>
            <Button type="submit" className="ml-4 flex-none">
              Join
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

interface Role {
  company: string;
  title: string;
  logo: ImageProps["src"];
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === "string" ? role.start : role.start.label;
  let startDate =
    typeof role.start === "string" ? role.start : role.start.dateTime;

  let endLabel = typeof role.end === "string" ? role.end : role.end.label;
  let endDate = typeof role.end === "string" ? role.end : role.end.dateTime;

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium">{role.company}</dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-muted-foreground">{role.title}</dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-muted-foreground"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{" "}
          <span aria-hidden="true">—</span>{" "}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: "Planetaria",
      title: "CEO",
      logo: logoPlanetaria,
      start: "2019",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: "Airbnb",
      title: "Product Designer",
      logo: logoAirbnb,
      start: "2014",
      end: "2019",
    },
    {
      company: "Facebook",
      title: "iOS Software Engineer",
      logo: logoFacebook,
      start: "2011",
      end: "2014",
    },
    {
      company: "Starbucks",
      title: "Shift Supervisor",
      logo: logoStarbucks,
      start: "2008",
      end: "2011",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BriefcaseBusinessIcon className="h-6 w-6 flex-none text-muted-foreground" />
          Work
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="mt-6 space-y-4">
          {resume.map((role, roleIndex) => (
            <Role key={roleIndex} role={role} />
          ))}
        </ol>
        <Button variant="secondary" className="mt-6 w-full" asChild>
          <Link href="#">
            Download CV
            <ArrowDownIcon />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4);

  return (
    <>
      <section className="border-b">
        <div className="max-w-5xl mx-auto border-l border-r px-10 py-18 bg-[linear-gradient(90deg,var(--muted)_1px,transparent_1px),linear-gradient(var(--muted)_1px,transparent_1px)] bg-[size:18px_18px]">
          <code className="text-xs text-center font-mono text-muted-foreground">
            v1.0.0
          </code>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Software developer, founder, and amateur astronaut.
          </h1>
          <p className="mt-6 text-base text-muted-foreground">
            I&apos;m Sergiu, a software developer and entrepreneur based in
            Boston, MA. I&apos;m the founder and CEO of Planetaria, where we
            develop technologies that empower regular people to explore the
            world on their own terms.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink href="#" aria-label="Follow on X" icon={XIcon} />
            <SocialLink
              href="#"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="#"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="#"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-5xl mx-auto border-l border-r px-4 py-6 md:px-8 md:py-10 grid grid-cols-1 gap-y-20 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </section>
    </>
  );
}
