import Link from 'next/link';
import { GitHubIcon, InstagramIcon, LinkedInIcon, XIcon } from './social-icons';

export function Footer() {
  return (
    <footer className="border-t">
      <section className="max-w-5xl mx-auto border-l border-r py-4 px-6 flex md:flex-row flex-col gap-3 justify-between items-center min-h-16">
        <p className="text-sm text-muted-foreground">
          &copy; <span className="font-mono">{new Date().getFullYear()}</span>{' '}
          Sergiu Frunza. All rights reserved.
        </p>
        <div className="flex gap-6">
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
      </section>
      {/* </ContainerOuter> */}
    </footer>
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
