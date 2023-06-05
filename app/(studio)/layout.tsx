import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

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
      <body className={figtree.className}>{children}</body>
    </html>
  );
}
