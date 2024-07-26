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

export default function NewLogs() {
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
            <Input id="Hour" type="number" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Note" className="text-center">
              Note
            </Label>
            <Input
              id="Note"
              placeholder="Notes of Log"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
