export const getRentalStatus = (startDate, endDate) => {
  const now = new Date() / 1000;

  if (now >= startDate && now <= endDate) return "Ongoing";
  if (now < startDate) return "Pending";
  if (now > endDate) return "Finished";
};
