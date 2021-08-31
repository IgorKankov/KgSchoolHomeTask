const array = [1, 3, 6, [11, 12], [15, [19, 23]]];

const flatten = (arr) => {
  return arr.reduce((current, toFlat) => {
    return current.concat(Array.isArray(toFlat) ? flatten(toFlat) : toFlat);
  }, [])
};

console.log(flatten(array))