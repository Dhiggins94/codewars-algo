const areaOrPerimeter = function(l , w) {
  // Return your answer
 let area = l * w
 let perimeter = l*2 + w*2
 
if( l === w){
  return area
}else{
  return perimeter
}
  }