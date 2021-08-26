const Vector = function (income) {

  const length = income.length;

  return {
    array: income,
    add: function (vector) {
      vector = validateVector(vector, length);
      let sum = [];
      for (let i = 0; i < length; i++) {
        sum[i] = vector[i] + this.array[i];
      }
      return sum;
    },
    subtract: function (vector) {
      vector = validateVector(vector, length);
      let sum = [];
      for (let i = 0; i < length; i++) {
        sum[i] = this.array[i] - vector[i];
      }
      return sum;
    },
    dot: function (vector) {
      vector = validateVector(vector, length);
      let sum = 0;
      for (let i = 0; i < length; i++) {
        sum += this.array[i] * vector[i];
      }
      return sum;
    },
    toString: function () {
      return `(${income.toString()})`;
    },
    equal: function (vector) {
      for (let i = 0; i < length; i++) {
        if (vector.array[i] !== this.array[i]) {
          return false
        } else {
          return true
        }
      }
    }
  }
};

function validateVector(vector, length) {
  if (vector.array.length === length) {
    return vector.array.sort();
  } else {
    throw "Error: Not the same size vector."
  }
}


const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7, 8]);

console.log("a.add(b)", a.add(b));
console.log("a.subtract(b)", a.subtract(b));
console.log("a.dot(b)", a.dot(b));
console.log("a.equal(b)", a.equal(b));
console.log("a.toString()", a.toString());
console.log("a.add(c)", a.add(c));


//сам не смог решить(с классами знаком только теоретично), нашел решение в интернете, но вроде все ясно как это работает
