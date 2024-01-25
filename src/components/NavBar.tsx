'use client'

import { useRouter } from "next/navigation"

export default function NavBar({paths} : {paths: string[]}) {
    const router = useRouter();
    return (
        <nav className="flex flex-row gap-5 min-h-6 justify-end px-5 py-2">
            {paths.map(p=>(
                // TODO: Drop shadows working for all buttons
                <button onClick={()=>router.push(`/${p}`)} className="text-lg p-1 rounded drop-shadow-[2_20px_13px_rgba(255,255,255,0.25)]">{p}</button>
            ))}
        </nav>
    )
}