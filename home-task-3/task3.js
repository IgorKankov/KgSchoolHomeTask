const array = [1, 3, 4, 2, 3, 1, 4, 5];

// const uniqArray = (arr) => {
//   return [...new Set(arr)].sort((a, b) => a - b)
// };

const uniqArray = (array) => {
  return array.filter((el, ind, arr) => arr.indexOf(el) === ind).sort((a, b) => a - b)
};

console.log(uniqArray(array));