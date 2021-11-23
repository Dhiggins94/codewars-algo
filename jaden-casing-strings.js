String.prototype.toJadenCase = function () {
  

  let splitString = this.split(" ")
  
    for (let i = 0; i < splitString.length; i++) {
     
     if (splitString[i][0] === "'") {
      splitString[i] = splitString[i][0] + splitString[i][1].toUpperCase()  + splitString[i].slice(2)
     } else {
      splitString[i] = splitString[i][0].toUpperCase() + splitString[i].slice(1)
  
     }
    }
    let joinString = splitString.join(" ")
  return joinString
      
    }