function chunkArrayInGroups(array,number){
     let twoDimensionalArray = [];
     let index = 0;
     
     while(index < array.length){
         let smallerArray = array.slice(index, index + number)
         twoDimensionalArray.push(smallerArray)
         index += number;
         console.log(twoDimensionalArray)
     }
  return twoDimensionalArray;
}