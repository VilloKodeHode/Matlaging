import Link from "next/link";
import "../globals.css";
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
      <body className={`${figtree.className} max-w-3xl mx-auto py-10`}>
        <header>
          <Link
            href="/"
            className="text-lg font-bold text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text"
          >
            Joakim
          </Link>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
