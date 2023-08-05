import moment from "moment";

export const getNumberOfDays = (startDate, endDate) => {
  const a = moment(startDate, "MM-DD-YYYY");
  const b = moment(endDate, "MM-DD-YYYY");
  return b.diff(a, "days") + 1;
};
