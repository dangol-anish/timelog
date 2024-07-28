import dayjs from "dayjs";

export default function Calendar() {
  // generate an array of date for all the days in a specified month and year, if not specified, it takes current year and month
  function getDateInMonths(year = dayjs().year(), month = dayjs().month()) {
    const startDate = dayjs().year(year).month(month).date(1);
    const endDate = dayjs().endOf("month");

    const datesArray = [];

    for (let i = startDate.date(); i <= endDate.date(); i++) {
      datesArray.push(startDate.date(i).format("YYYY-MM-DD"));
    }
    console.log(datesArray);
    return datesArray;
  }

  getDateInMonths();
  return (
    <>
      <div className="border border-dashed flex flex-wrap gap-2 p-5 justify-center rounded-sm">
        {getDateInMonths().map((value, index) => {
          return <div className="h-5 w-5 bg-gray-100" key={index}></div>;
        })}
      </div>
    </>
  );
}
