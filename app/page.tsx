import Calendar from "@/components/Calendar";
import Logs from "@/components/Logs";
import Navbar from "@/components/Navbar";
import NewLogs from "@/components/NewLogs";

export default function Home() {
  return (
    <>
      <div className="space-y-10 flex flex-col p-5 gap-10">
        <Navbar />
        <NewLogs />
        <Calendar />
        <Logs />
      </div>
    </>
  );
}
