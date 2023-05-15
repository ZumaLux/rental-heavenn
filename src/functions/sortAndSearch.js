// Searching data
export const searchItems = (query, data) => {
  if (!query) return data;
  const _query = query.toLowerCase().trim();
  const excludedColumns = ["id", "img"];
  return data.filter((item) =>
    Object.keys(item).some((key) =>
      excludedColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(_query)
    )
  );
};

// Sorting data
export const sortItems = (orderBy, data) => {
  console.log(orderBy.split(" ")[1].includes("ascending"));
  if (orderBy === "default") return;
  else if (orderBy.split(" ")[1].includes("ascending")) {
    return [
      ...data.sort(function (a, b) {
        return (
          cmp(b[orderBy.split(" ")[1]], a[orderBy.split(" ")[1]]) ||
          cmp(b[orderBy.split(" ")[2]], a[orderBy.split(" ")[2]])
        );
      }),
    ];
  } else if (orderBy.split(" ")[1].includes("descending")) {
    return [
      ...data.sort(function (a, b) {
        return (
          cmp(a[orderBy.split(" ")[1]], b[orderBy.split(" ")[1]]) ||
          cmp(a[orderBy.split(" ")[2]], b[orderBy.split(" ")[2]])
        );
      }),
    ];
  }
};

function cmp(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
