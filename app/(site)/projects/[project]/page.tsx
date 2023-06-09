import { getProject } from "@/sanity/sanity-utils";

import Image from "next/image";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <>
      <div>
        <header className="flex items-center justify-between">
          <h1 className="font-extrabold text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-7xl">
            {project.name}
          </h1>
          <a
            href={project.url}
            title="View Project"
            target="_blank"
            rel="noopener norefeer"
            className="px-4 py-3 font-bold text-gray-500 bg-gray-100 rounded-lg whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 hover:font-extrabold"
          >
            View Project
          </a>
        </header>
        <div className="mt-5 text-lg text-gray-700">
          <PortableText value={project.content} />
        </div>
        <Image
          src={project.image}
          width={1920}
          height={1080}
          alt={project.alt}
          className="object-cover mt-10 border-2 border-gray-700 rounded-xl"
        />
      </div>
    </>
  );
}
