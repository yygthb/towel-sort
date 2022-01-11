module.exports = function towelSort(matrix) {
  return (matrix || []).reduce((acc, item, index) => {
    const subArr = index % 2 === 0 ? item : item.reverse();
    acc.push(...subArr);
    return acc;
  }, []);
};
