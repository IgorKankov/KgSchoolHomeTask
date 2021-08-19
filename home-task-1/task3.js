function solveQuadraticEquation(a, b, c) {
  if (a !== 0) {
    const x = (-b - (Math.sqrt((b * b) - (4 * a * c)))) / (2 * a);
    const y = (-b + (Math.sqrt((b * b) - (4 * a * c)))) / (2 * a);
    return [x, y].join(', ')
  }
}

console.log(solveQuadraticEquation(1, -1, -2)); // -1, 2