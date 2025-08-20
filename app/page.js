import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center px-5 md:py-20 py-10 max-w-screen-md mx-auto">
      <div className="py-10 space-y-5">
        <h1 className="sm:text-5xl text-4xl font-medium">
          Yo,{" "}
          <a
            href="https://github.com/nabeelv7"
            className="relative inline-block px-2 py-1"
          >
            <span className="relative z-10 dark:text-base-300 font-serif font-medium">Nabeel</span>
            <span className="absolute inset-0 -rotate-1 bg-[#e16540]" />
          </a>{" "}
          here 👋
        </h1>
        <p className="text-xl">Excited to see you. You'll find something useful.</p>
      </div>



      <h1 className="sm:text-4xl text-3xl font-medium md:mt-10 mt-5">My Writings</h1>
      <section id="blogs-list" className="md:py-7 py-4">
        {blogs.map((blog) => {
          return (
            <Link href={`/blog${blog.link}`} className="border-b border-gray-600 py-5 flex items-center justify-between" key={blog.link}>
              <div>
                <h2 className="text-2xl mb-2 font-bold">{blog.name}</h2>
                <p className="opacity-85">{blog.preview}</p>
              </div>
              <p className="opacity-85">{blog.date}</p>
            </Link>
          )
        })}
      </section>
    </main>
  );
}

const blogs = [
  {
    name: "How I made this blog in next",
    preview: "Scaffold a new next app. I'm using version 15.5.0...",
    link: "/how-i-made-this-blog-in-next",
    date: "20/8/25",
  },
]