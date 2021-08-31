const myObj = {name: "Object", length: 2}

function transformObject(obj) {
  let result = {};
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object') return;
    result[obj[key]] = key
  });
  return result
}

console.log(transformObject(myObj))