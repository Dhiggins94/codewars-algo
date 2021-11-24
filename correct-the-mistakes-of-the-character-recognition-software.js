function correct(string)
{
	// your code here
// const nums = ["5","0","1"]
// for(let i = 0; i <= string; i++){
//   if(nums === string){
    return string.replace(/0/g,"O").replace(/5/g,"S").replace(/1/g,"I")
//   }
//   return string;
// }
  
//   This uses regex, searches all occurances of the number "g for global"
//   replaces that occurance with the String.prototype.replace()
  

}