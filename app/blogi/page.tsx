import Link from "next/link";
import Image from "next/image";
import { blogs } from "../data/blogs";

export default function BlogPage() {
  return (
    <main>
      {/* Blog Hero Section */}
      <section className="bg-[#27ae60] text-white py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blogi</h1>
            <p className="text-xl opacity-90">
              Lue puhtauteen ja siivoukseen liittyviä artikkeleita
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link key={blog.id} href={`/blogi/${blog.id}`}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src={blog.thumbnail}
                    width={500}
                    height={300}
                    alt={blog.titleFi}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      {blog.titleFi}
                    </h3>
                    <p className="text-gray-600 mb-4">{blog.summaryFi}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">
                        {new Date(blog.date).toLocaleDateString("fi-FI", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span className="text-[#27ae60] font-medium">
                        Lue lisää →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
