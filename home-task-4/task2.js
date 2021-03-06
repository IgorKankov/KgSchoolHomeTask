function makeGroup() {
  let units = [];

  let i = 0;
  while (i < 10) {
    let unit = function() { // create a unit function
      console.log(units.indexOf(unit)); // that should show its number
    };
    units.push(unit); // add it to the array
    i++;
  }

  // ...and return the array of units
  return units;
}

let group = makeGroup();

// all units show 10 instead of their numbers 0, 1, 2, 3...
group[0](); // 10 instead of 0
group[3](); // instead of 1
group[2](); // 10 instead of 2
group[9](); // 10 instead of 2