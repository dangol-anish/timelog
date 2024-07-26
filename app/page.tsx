import Navbar from "@/components/Navbar";
import NewLogs from "@/components/NewLogs";

export default function Home() {
  return (
    <>
      <div className="space-y-10">
        <Navbar />
        <NewLogs />
      </div>
    </>
  );
}
