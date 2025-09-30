export const dynamic = 'force-static';
export const revalidate = false;

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
