const data = {a: 1, b: 2, c: 3};

function deleteProperty(object, parameter) {
  delete object[parameter];
  return object
}

console.log(deleteProperty(data, 'b'));
