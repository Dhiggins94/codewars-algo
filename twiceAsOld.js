function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  console.log(dadYearsOld)
  console.log(sonYearsOld)
  
//   let twiceSonAge = 2 * sonYearsOld
  let ages = dadYearsOld - (sonYearsOld * 2)
  return   Math.abs(ages)

}