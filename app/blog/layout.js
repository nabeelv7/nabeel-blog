import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogLayout({ children }) {
    return (
        <main className="prose lg:prose-lg prose-invert prose-neutral max-w-screen-md mx-auto md:py-20 py-10 px-5 prose-pre:bg-black prose-pre:border prose-pre:border-gray-700">
            <Link className="btn mb-10" href="/"><ArrowLeft size={16} /> Home</Link>
            {children}
        </main>
    )
}