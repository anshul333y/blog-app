import Avatar from "./Avatar";

interface blogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

function BlogCard(props: blogCardProps) {
  return (
    <>
      <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-3xl cursor-pointer">
        <div>
          <Avatar name={props.authorName} /> {props.authorName} .{" "}
          {props.publishedDate}
        </div>
        <div className="text-xl font-semibold pt-2">{props.title}</div>
        <div className="text-md font-thin">
          {props.content.slice(0, 100) + "..."}
        </div>
        <div className="text-slate-500 text-sm font-thin pt-2">
          {`${Math.ceil(props.content.length / 100)} minute(s) read`}
        </div>
      </div>
    </>
  );
}

export default BlogCard;
