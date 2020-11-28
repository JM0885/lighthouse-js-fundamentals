/* function isOdd(num) { return num % 2 === 1; }

console.log("3 is odd " + isOdd(3));*/

let num = 0;

function lastIndexOf(index, num){
  let output = 0;
  if (index === []){
  return output = -1;
  } else {
  for (let i=0; i<index.length; i++){
  if(index[i] === num){
  output = i;
  }
  }
  }
  return output;
  }
  
  console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), “=?”, 3);
  console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), “=?”, 4);
  console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), “=?”, -1);
  console.log(lastIndexOf([ 5, 5, 5 ], 5), “=?”, 2);
  console.log(lastIndexOf([], 3), “=?”, -1);

  

