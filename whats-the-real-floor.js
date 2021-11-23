function getRealFloor(n) {

  if(n <= 0 ){
  return n
}
//    if its less than or equal to  zero return that number
else if(n <= 12){
 return n - 1
}
//    if its less than or equal to 12 decremenet by 1
else if(n >= 12){
 return n - 2 
//   if its greater than or equal than 12 decrement by 2
//   this was easier to do than using 13 since 13 doesnt exist
}
}