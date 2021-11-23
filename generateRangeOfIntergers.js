function generateRange(min, max, step){

  let storage = []
  for(let i = min; i <= max; i+= step){
    storage.push(i)
  }
  return storage
}