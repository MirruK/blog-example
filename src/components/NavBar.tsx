"use client";

import { useRouter } from "next/navigation";

export type PathWithRoute = {
  pathLabel: string;
  route: string;
};

export default function NavBar({ paths }: { paths: PathWithRoute[] }) {
  const router = useRouter();
  return (
    <nav className="flex flex-row gap-5 justify-end px-6 py-1 bg-slate-900 border-b-slate-400 border-b">
      {paths.map((p) => (
        <button
          key={p.route}
          onClick={() => router.push(p.route)}
          className="text-sm p-1 hover:text-sky-500"
        >
          {p.pathLabel}
        </button>
      ))}
    </nav>
  );
}
