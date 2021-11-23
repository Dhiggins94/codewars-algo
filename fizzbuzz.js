// Return an array
function fizzbuzz(n)
{
  let storage = []
for (let i=1; i <= n; i++){
    if (i % 15 == 0){
        storage.push("FizzBuzz");
   } else if (i % 3 == 0){
        storage.push("Fizz");
    }else if (i % 5 == 0){
        storage.push("Buzz");
    }else{
       storage.push(i);
      }
}
    return storage

}
// you can also just do if(i %3 ==0 && i % 5 ==0) for the first test for fizzbuzz