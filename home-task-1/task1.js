function drawTriangle(height){
  const hashSymbol = '#'
  for(let i = 1; i <= height; i++){
    console.log(hashSymbol.repeat(i))
  }
}

drawTriangle(3)