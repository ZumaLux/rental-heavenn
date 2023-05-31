import moment from "moment";

export const getNumberOfDays = (startDate, endDate) => {
  const a = moment(startDate, "MM-DD-YYYY");
  const b = moment(endDate, "MM-DD-YYYY");
  console.log("num days ", b.diff(a, "days") + 1);
  return b.diff(a, "days") + 1;
};
