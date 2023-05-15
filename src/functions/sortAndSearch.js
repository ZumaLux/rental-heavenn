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
  if (orderBy === "default") return data;
  else if (orderBy.includes("ascending")) {
    return [
      ...data.sort(function (a, b) {
        return (
          cmp(a[orderBy.split(" ")[0]], b[orderBy.split(" ")[0]]) ||
          cmp(a[orderBy.split(" ")[1]], b[orderBy.split(" ")[1]])
        );
      }),
    ];
  } else if (orderBy.includes("descending")) {
    return [
      ...data.sort(function (a, b) {
        return (
          cmp(b[orderBy.split(" ")[0]], a[orderBy.split(" ")[0]]) ||
          cmp(b[orderBy.split(" ")[1]], a[orderBy.split(" ")[1]])
        );
      }),
    ];
  }
};

function cmp(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
