import { useParams } from "react-router";
import Appbar from "../components/Appbar";
import FullBlog from "../components/FullBlog";
import { useBlog } from "../hooks";
import Spinner from "../components/Spinner";

export default function Blog() {
  const { id } = useParams();
  const { blog, loading } = useBlog({
    id: id || "",
  });

  if (loading || !blog) {
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
    <div>
      <FullBlog blog={blog} />
    </div>
  );
}
