import axios from "axios";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

async function getBlog(slug) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/blogslug/${slug}`
  );
  return res.data.blogs;
}

async function getLatestBlogs() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/fourblogs`
  );
  return res.data.blogs;
}

export default async function BlogDetail({ params }) {

  const { slug } = await params;

  const blog = await getBlog(slug);
  const latestBlogs = await getLatestBlogs();

  if (!blog) {
    return <h1>Blog Not Found</h1>;
  }

  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto px-6 py-16">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-15">

        {/* LEFT SIDE BLOG */}
        <div className="lg:col-span-2">

          

          <div className="bg-white rounded-xl shadow p-6">
            <Link href="/" className="text-gray-900 text-lg flex items-center gap-2 mb-6 font-medium">
            ← Back to Blogs
          </Link>

            <img
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${blog.blogImg.url}`}
              alt={blog.blogName}
              className="w-full h-[350px] object-contain mb-6 rounded border border-gray-200"
            />

            <h1 className="text-4xl font-bold text-[#0f172a] mb-4">
              {blog.blogName}
            </h1>

            <div className="flex items-center text-sm text-gray-500 gap-4 mb-6">
              <span>📅 Published on {new Date(blog.blogDate).toDateString()}</span>
              <span>✍️ By Admin</span>
            </div>

            <div
              className="prose max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: blog.blogDetail }}
            />

          </div>

        </div>


        {/* RIGHT SIDEBAR */}
        <div>

          <div className="bg-white rounded-xl shadow p-6 ">

            <h2 className="text-xl font-semibold mb-6">
              Latest Posts
            </h2>

            <div className="space-y-5">

              {latestBlogs.map((item) => (

                <Link
                  key={item._id}
                  href={`/blog/${item.slug}`}
                  className="flex items-start gap-4 hover:bg-gray-50 p-2 rounded-lg transition"
                >

                  <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.blogImg.url}`}
                    alt={item.blogName}
                    className="w-17 h-19 object-cover rounded-md border shadow border-gray-200"
                  />

                  <div>

                    <p className="text-m font-semibold text-gray-800 leading-snug">
                      {item.blogName}
                    </p>

                    <p className="text-xs text-gray-500">
                      Published on {new Date(item.blogDate).toDateString()}
                    </p>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
    <Footer/>
    </>
    
  );
}