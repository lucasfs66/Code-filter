
let array = [1, 2, 3, 4, 5, 6, 7, 8]


function getEvenNumbers(numbersArray){
    // filter out the odd numbers
    
  //  let evenArray = numbersArray.filter( (num) => {num%2 === 0 })
  let evenArray = numbersArray.filter(x => x % 2 === 0)
    return evenArray

  }

  console.log(getEvenNumbers(array))