"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GrAdd } from "react-icons/gr";
import { DatePicker } from "./DatePicker";
import { useLogStore } from "@/store";
import { useToast } from "@/components/ui/use-toast";
import dayjs from "dayjs";

export default function NewLogs() {
  const { toast } = useToast();
  const log = useLogStore((state) => state.log);
  const logs = useLogStore((state) => state.logs);
  const setLog = useLogStore((state) => state.setLog);
  const setLogs = useLogStore((state) => state.setLogs);

  const validateLog = () => {
    if (!log.date || !log.hour || log.hour === 0) {
      throw "Date or Hours cannot be empty";
    } else if (log.hour >= 24) {
      throw "Please input a valid hour";
    }
  };

  const submitLog = () => {
    try {
      validateLog();
      setLogs(log, dayjs(log.date).format("YYYY-MM-DD"));
      toast({
        title: "Successfully created log",
        description: `Committed ${
          log.hour
        } hours on ${log.date.toDateString()}`,
      });
    } catch (error) {
      toast({
        title: "Failed to create Log",
        variant: "destructive",
        description: error as string,
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="sm:w-72 border-dashed hover:border-solid"
          variant="outline"
        >
          <GrAdd />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Logs</DialogTitle>
          <DialogDescription>
            Capture your journey each day to see growth, learn, and stay
            inspired.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Date" className="text-center">
              Date
            </Label>
            <DatePicker />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Hour" className="text-center">
              Hour
            </Label>
            <Input
              id="Hour"
              type="number"
              className="col-span-3"
              value={log.hour}
              onChange={(e) =>
                setLog({ ...log, hour: parseInt(e.target.value) })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Note" className="text-center">
              Note
            </Label>
            <Input
              id="Note"
              placeholder="Notes of Log"
              className="col-span-3"
              value={log.note}
              onChange={(e) => setLog({ ...log, note: e.target.value })}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={submitLog}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
