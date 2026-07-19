import { Link } from "react-router";
import Avatar from "./Avatar";

function Appbar() {
  return (
    <Link to={"/blogs"}>
      <div className="flex justify-between px-10 py-2 border-b">
        <div className="flex justify-center flex-col cursor-pointer">
          Blog-App
        </div>
        <Avatar name="Anshul Yadav" size="big" />
      </div>
    </Link>
  );
}

export default Appbar;
