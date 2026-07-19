import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";

function Blogs() {
  return (
    <>
      <Appbar />
      <div className="flex justify-center">
        <div className="max-w-xl">
          <BlogCard
            authorName="Anshul Yadav"
            publishedDate="18 Jul 26"
            title="This is my first blog"
            content="This is my first blog"
          />
          <BlogCard
            authorName="Anshul Yadav"
            publishedDate="18 Jul 26"
            title="This is my first blog"
            content="This is my first blog"
          />
          <BlogCard
            authorName="Anshul Yadav"
            publishedDate="18 Jul 26"
            title="This is my first blog"
            content="This is my first blog"
          />
        </div>
      </div>
    </>
  );
}

export default Blogs;
