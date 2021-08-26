function extend() {
  console.log(arguments);

  let result = {};

  Object.values(arguments).forEach(obj => {

    const includesSameKey = Object.keys(result).some(key => Object.keys(obj).includes(key));

    if (typeof obj !== 'object' || includesSameKey) return;

    result = {...result, ...obj}

  });

  console.log('result', result)
}

extend({a: 1, b: 2}, {c: 3}, {a: 4}, {b: null}, 'test')