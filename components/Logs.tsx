"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useLogStore } from "@/store";

export default function Logs() {
  const logs = useLogStore((state) => state.logs);

  //list from supabase
  return (
    <Table>
      <TableCaption>A list of your recent logs.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/3">Date</TableHead>
          <TableHead className="w-1/3">Hours</TableHead>
          <TableHead className="w-1/3">Note</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.keys(logs).map((key) => {
          const log = logs[key];
          return (
            <TableRow
              key={key}
              className={cn(log.hour <= 5 ? "bg-red-100" : "")}
            >
              <TableCell className="font-medium">
                {log.date.toDateString()}
              </TableCell>
              <TableCell className="font-medium">{log.hour}</TableCell>
              <TableCell className="font-medium">{log.note}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
