import Link from "next/link";
import "../globals.css";
import { Figtree } from "next/font/google";
import { getPages } from "@/sanity/sanity-utils";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Olas matlaging",
  description: "En mockup nettside for matlaging",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body className={`${figtree.className} max-w-3xl mx-auto py-10`}>
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text"
          >
            Joakim
          </Link>
          <div className="flex items-center gap-3 text-gray-600 text-small">
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="hover:underline"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
