import { Article } from '@/components/article';
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/social-icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import logoAirbnb from '@/images/logos/airbnb.svg';
import logoFacebook from '@/images/logos/facebook.svg';
import logoPlanetaria from '@/images/logos/planetaria.svg';
import logoStarbucks from '@/images/logos/starbucks.svg';
import portraitImage from '@/images/portrait-2.jpeg';
import { getAllArticles } from '@/lib/articles';
import { ArrowDownIcon, BriefcaseBusinessIcon } from 'lucide-react';
import Image, { type ImageProps } from 'next/image';
import Link from 'next/link';

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

interface Role {
  company: string;
  title: string;
  logo: ImageProps['src'];
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label;
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime;

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label;
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime;

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
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Planetaria',
      title: 'CEO',
      logo: logoPlanetaria,
      start: '2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Airbnb',
      title: 'Product Designer',
      logo: logoAirbnb,
      start: '2014',
      end: '2019',
    },
    {
      company: 'Facebook',
      title: 'iOS Software Engineer',
      logo: logoFacebook,
      start: '2011',
      end: '2014',
    },
    {
      company: 'Starbucks',
      title: 'Shift Supervisor',
      logo: logoStarbucks,
      start: '2008',
      end: '2011',
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
            Download Resume
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
            <SocialLink
              href="https://x.com/s_frunza"
              aria-label="Follow on X"
              icon={XIcon}
              target="_blank"
              rel="noopener noreferrer"
            />
            <SocialLink
              href="https://github.com/sfrunza"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
              target="_blank"
              rel="noopener noreferrer"
            />
            <SocialLink
              href="https://www.linkedin.com/in/sergiufrunza"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </section>
      <section className="border-b">
        <div className="max-w-5xl mx-auto border-l border-r">
          <div className="grid lg:grid-cols-[1fr_auto] justify-items-center max-lg:divide-y">
            <Image
              src={portraitImage}
              alt="profile image"
              title="profile image"
              width={175}
              height={175}
              className="aspect-square bg-background object-cover"
            />
            <div className="flex lg:order-first w-full flex-col max-lg:py-6 max-lg:border-t px-6 justify-center items-start h-full">
              <h2 className="font-bold tracking-tight text-2xl">
                Here&apos;s who I am & what I do
              </h2>
              <p className="mt-6 max-w-2xl text-base text-muted-foreground">
                Hello, I&apos;m Sergiu, a Full-Stack Web Developer based in
                Boston. I have passion for creating innovative and engaging web
                apps.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-5xl mx-auto border-l border-r">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x max-lg:divide-y">
            <div className="flex flex-col divide-y">
              {articles.map((article) => (
                <Article key={article.slug} article={article} />
              ))}
            </div>
            <div className="relative pb-8 bg-[linear-gradient(90deg,var(--muted)_1px,transparent_1px),linear-gradient(var(--muted)_1px,transparent_1px)] bg-[size:6px_6px]">
              <div className="bg-background border-b p-6 flex flex-wrap gap-10">
                {new Array(10).fill(0).map((_, index) => {
                  return (
                    <div className="size-12 aspect-square" key={index}>
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="-10.5 -9.45 21 18.9"
                        fill="#087ea4"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full self-center flex origin-center transition-all ease-in-out"
                      >
                        <circle cx="0" cy="0" r="2" fill="#087ea4"></circle>
                        <g stroke="#087ea4" strokeWidth="1" fill="none">
                          <ellipse rx="10" ry="4.5"></ellipse>
                          <ellipse
                            rx="10"
                            ry="4.5"
                            transform="rotate(60)"
                          ></ellipse>
                          <ellipse
                            rx="10"
                            ry="4.5"
                            transform="rotate(120)"
                          ></ellipse>
                        </g>
                      </svg>
                    </div>
                  );
                })}
              </div>
              <div className="p-4">
                <Resume />
              </div>
              <code className="text-xs font-mono text-muted-foreground absolute bottom-4 right-4">
                resume.json
              </code>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
