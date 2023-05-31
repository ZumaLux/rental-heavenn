export const convertToDate = (date) => {
  // convert epoch(date in seconds) to date
  const convertedDate = new Date(date * 1000);
  const stringDate = convertedDate.toString().slice(4, 15);

  return stringDate;
};
