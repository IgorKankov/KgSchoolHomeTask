const linkedList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: null
        }
      }
    }
  }
};

const linkedListForRecursion = {
  value: 22,
  next: {
    value: 49,
    next: {
      value: 102,
      next: {
        value: -10,
        next: {
          value: 5,
          next: null
        }
      }
    }
  }
};

function iterativeSum(list) {
  let sum = 0;
  while (list !== null) {
    sum += list.value;
    list = list.next;
  }
  return sum
}

console.log("sum from iterative function", iterativeSum(linkedList));

const recursiveSum = (list, sum = 0) => {
  return list === null ? sum : recursiveSum(list.next, sum += list.value);
};

console.log("sum from recursive function", recursiveSum(linkedListForRecursion));


