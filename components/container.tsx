import { cn } from "@/lib/utils";

export function ContainerOuter({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("sm:px-8", className)} {...props}>
      <div className="mx-auto w-full max-w-7xl lg:px-8">{children}</div>
    </div>
  );
}

export function ContainerInner({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("relative px-4 sm:px-8 lg:px-12", className)} {...props}>
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
}

export function Container({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <ContainerOuter {...props}>
      <ContainerInner>{children}</ContainerInner>
    </ContainerOuter>
  );
}
