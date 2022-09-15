const analyzeArray = (array) => {
  const average = findAverage(array);
  const min = findMin(array);
  const max = findMax(array);
  const length = findLength(array);

  const analysisObject = {
    average,
    min,
    max,
    length,
  };
  return analysisObject;
};

const findAverage = (array) =>
  array.reduce((total, element) => total + element, 0) / array.length;
const findMin = (array) => Math.min(...array);
const findMax = (array) => Math.max(...array);
const findLength = (array) => array.length;

export default analyzeArray;
