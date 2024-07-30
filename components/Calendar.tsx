"use client";
import dayjs from "dayjs";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { useLogStore } from "@/store";

export default function Calendar() {
  const logs = useLogStore((state) => state.logs);
  // generate an array of date for all the days in a specified month and year, if not specified, it takes current year and month
  function getDateInMonths(year = dayjs().year(), month = dayjs().month()) {
    const startDate = dayjs().year(year).month(month).date(1);
    const endDate = dayjs().endOf("month");

    const datesArray = [];

    for (let i = startDate.date(); i <= endDate.date(); i++) {
      datesArray.push(startDate.date(i).format("YYYY-MM-DD"));
    }

    return datesArray;
  }

  function getColor(value: number): string {
    switch (true) {
      // case value === 0:
      //   return "bg-gray-100";
      case value > 0 && value < 5:
        return "bg-green-100";
      case value >= 5 && value < 10:
        return "bg-green-300";
      case value >= 10:
        return "bg-green-500";
      default:
        return "bg-gray-100";
    }
  }

  getDateInMonths();
  const hour = 0;

  return (
    <>
      <div className="border border-dashed flex flex-wrap gap-2 p-10 justify-center rounded-sm cursor-pointer">
        {getDateInMonths().map((value, index) => {
          //   return <div className="h-5 w-5 bg-gray-100" key={index}></div>;
          const log = logs[value];
          return (
            <>
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <div
                    className={cn(
                      "h-5 w-5 rounded-sm cursor-pointer",
                      getColor(log?.hour || 0)
                    )}
                  ></div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  {log?.hour || 0} hours on {value}
                </HoverCardContent>
              </HoverCard>
            </>
          );
        })}
      </div>
    </>
  );
}
