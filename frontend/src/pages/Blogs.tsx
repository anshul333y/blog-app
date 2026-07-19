import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import Spinner from "../components/Spinner";
import useBlogs from "../hooks";

function Blogs() {
  const { blogs, loading } = useBlogs();

  if (loading) {
    return (
      <div>
        <Appbar />

        <div className="h-screen flex flex-col justify-center">
          <div className="flex justify-center">
            <Spinner />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              publishedDate={"19 Jul 26"}
              title={blog.title}
              content={blog.content}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Blogs;
