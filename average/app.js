//write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

function avg(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let result = sum / array.length;
  return result;
}

console.log(avg([0, 50]));
console.log(avg([75, 76, 80, 95, 100]));