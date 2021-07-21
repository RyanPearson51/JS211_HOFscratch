const mapScratch = (theArray, callback) => {
    let mapArray = [];
  
    for (let i=0; i<theArray.length; i++){
      let element = theArray[i];
      let newElement = callback(element, i);
      mapArray.push(newElement);
    }
  
    return mapArray;
  }


//---forEach---
  const forEachScratch = (theArray, callback) => {
    //forEach: apply callback to every element in the array
  let forEachArray = [];
  for (let i=0; i<theArray.length; i++){
      let element = theArray[i];
      let newElement = callback(element,i);
      forEachArray.push(newElement);
  }
  return forEachArray;
}


let numbersArray = [1,2,2,3,5];
let doubles = forEachScratch(numbersArray, function(element){
    return element*2;
  });
  console.log('forEach:')
   console.log('original', numbersArray);
   console.log('doubles', doubles);
  

//---filter---
let array = [1,1,2,4,9,10]
  const filterScratch = (theArray, callback) => {
    let filterArray = [];
    for (let i=0; i<array.length; i++){
      if (array[i] %2 ==0){
        filterArray.push(array[i]);
      }
    }
    return filterArray;
  }
  

  let evens = filterScratch(array, function(element){
    return element;
  })
  console.log('filter:')
  console.log('original', array);
  console.log('evens', evens);
  

//---find---
  const findScratch = (theArray, callback) => {
    let findArray = [];
    for (let i=0; i<array.length; i++){
      if (array[i] == 4){
        findArray.push(array[i])
      }
    }
    return findArray;
  }

  let four = findScratch(array, function(element){
    return element;
  })
  console.log('find:')
  console.log('original', array);
  console.log('four', four)
  

//---findIndex---
  const findIndexScratch = (theArray, callback) => {
    let findIndexArray = [];
    for (let i=0; i<array.length; i++){
      if (array[i]==9){
        return i;
      }
    }
    return findIndexArray;
  }

  let nineIndex = findIndexScratch(array, function(element){
    return element;
  })
  console.log('findIndex:');
  console.log('original', array);
  console.log('Index of 9:', nineIndex)