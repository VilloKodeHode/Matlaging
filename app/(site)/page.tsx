import { getProjects } from "@/sanity/schemas/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
      <h1 className="font-extrabold text-7xl">
        Hello I&apos;m{" "}
        <span className="text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text">
          Joakim
        </span>
        !
      </h1>
      <p className="mt-3 text-xl text-gray-600">
        Howdy everyone! Check out my projects!
      </p>
      <h2 className="mt-24 text-3xl font-bold text-gray-700">My projects</h2>
      <div className="grid grid-cols-1 gap-8 mt-5 lg:grid-cols-3 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            className="p-1 transition border-2 rounded-lg boder-gray-500 hover:scale-105 hover:border-blue-500"
            href={`/projects/${project.slug}`}
            key={project._id}
          >
            {project.image && (
              <Image
                src={project.image}
                width={500}
                height={300}
                alt={project.alt}
                className="object-cover border border-gray-500 rounded-lg"
              />
            )}

            <div className="mt-2 font-extrabold text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-orange-600 bg-clip-text w-fit">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
