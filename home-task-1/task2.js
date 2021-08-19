function drawChessboard() {
  for (let x = 1; x <= 8; x++) {
    let row = ' ';
    for (let y = 1; y <= 8; y++) {
      if (x % 2) {
        y % 2 ?  row += 'w' : row += 'b';
      } else {
        y % 2 ? row += 'b' : row += 'w';
      }
    }
    console.log(row);
  }
}

drawChessboard();
