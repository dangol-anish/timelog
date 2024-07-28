import { IoTimer } from "react-icons/io5";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <IoTimer size={25} />
          <h1>Time</h1>
        </div>

        <Button>Logout</Button>
      </div>
    </>
  );
}
