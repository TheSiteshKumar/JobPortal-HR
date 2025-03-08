export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-16">
      {children}
    </div>
  );
}