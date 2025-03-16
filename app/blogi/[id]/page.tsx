"use client";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "../../data/blogs";
import { useParams } from "next/navigation";

export default function BlogPost() {
  const params = useParams();
  const blog = blogs.find((blog) => blog.id === params.id);

  if (!blog) {
    return <div className=" py-24 px-4 text-center">Blogia ei löytynyt.</div>;
  }

  return (
    <main>
      {/* Blog Post Header */}
      <section className="bg-[#27ae60] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/blogi"
            className="inline-flex items-center text-white mb-6 hover:underline"
          >
            ← Takaisin blogiin
          </Link>
        </div>
      </section>

      {/* Blog Post Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Image
            src={blog.thumbnail || "/images/blog-default.jpg"}
            width={1000}
            height={500}
            alt={blog.titleFi}
            className="w-full h-64 md:h-80 object-cover rounded-xl mb-8"
          />

          <article className="bg-white p-8 rounded-xl shadow-md">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              {blog.titleFi}
            </h1>

            <div className="flex items-center text-gray-500 mb-8">
              <span className="mr-4">{blog.author}</span>
              <span>
                {new Date(blog.date).toLocaleDateString("fi-FI", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {blog.contentFi.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          <div className="mt-12 text-center">
            <Link
              href="/blogi"
              className="inline-flex items-center text-[#27ae60] hover:underline"
            >
              ← Takaisin blogiin
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
