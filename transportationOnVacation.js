function rentalCarCost(d) {
  // Your solution here 
//   days are d
  console.log(d)
  
let total = d * 40;  
//   reps a single day
  
  if (d >= 7){
    return total -= 50;
  }
//   removes 50
  else if( d >= 3){
    return total  -= 20;
  }
//   removes 20
  return total;
  }