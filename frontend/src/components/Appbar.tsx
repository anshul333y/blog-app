import Avatar from "./Avatar";

function Appbar() {
  return (
    <div className="flex justify-between px-10 py-2 border-b">
      <div className="flex justify-center flex-col">Blog-App</div>
      <Avatar name="Anshul Yadav" size="big" />
    </div>
  );
}

export default Appbar;
