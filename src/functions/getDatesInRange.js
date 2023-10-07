import moment from "moment/moment";

// returns list of calendar dates
export const getDatesInRange = (start, end) => {
  // convert epoch(date in seconds) to date
  const startDate = moment(start * 1000);
  const endDate = moment(end * 1000);

  let days = [];

  while (startDate.isSameOrBefore(endDate)) {
    days.push(new Date(startDate.format("MM/DD/YYYY")));
    startDate.add(1, "days");
  }
  return days;
};
