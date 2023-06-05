export const metadata = {
  title: "Olas matlaging",
  description: "En mockup nettside for matlaging",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
