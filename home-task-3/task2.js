function ellipsis(str, count) {
  if(str.length <= count){
    return str
  } else {
    return `${str.split('').slice(0, count).join('').trim()}...`
  }
}

console.log(ellipsis('Today is rainy Sunday', 15));
console.log(ellipsis('Full text.', 15));