export const sliceData = (currentPage, itemsPerPage, data) => {
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  return data.slice(indexOfFirstPost, indexOfLastPost);
};
