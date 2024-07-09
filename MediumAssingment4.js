// Write a JavaScript function to implement insertion sort to sort an array of numbers.
function insertionSort(arr){
return arr.sort((a,b)=>a-b)
}
console.log(insertionSort([5, 3, 8, 1, 2])) 
// Expected Output: [1, 2, 3, 5, 8]
// Write a JavaScript function to check if a given string is a valid email address.
function isValidEmail(email){
    let str=email.includes('@')
   return str?true:false
}
console.log(isValidEmail("john.@doeexample.com")) 
// Expected Output: true

// Write a JavaScript function to find the second largest element in an array.
 function findSecondLargest(arr){
     arr.sort((a,b)=>{
    return b-a

    })
    return(arr[1])
// return newarr
 }
console.log(findSecondLargest([3, 1, 7, 4, 2])) 
// Expected Output: 4

// Write a JavaScript function to implement quicksort to sort an array of numbers.
function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    const pivot = array[Math.floor(array.length / 2)];
    const left = [];
    const right = [];
    const equal = [];
    console.log(pivot)

    for (const num of array) {
      if (num < pivot) {
        left.push(num);
      } else if (num > pivot) {
        right.push(num);
      } else {
        equal.push(num);
      }
    }
  
    return [...quicksort(left), ...equal, ...quicksort(right)];
  }
  
  // Example usage:
  const unsortedArray = [1, 2, 3, 5, 8];
  const sortedArray = quicksort(unsortedArray);
  console.log(sortedArray);
  
// Expected Output: [1, 2, 3, 5, 8]
// Write a JavaScript function to find the number of vowels in a string (considering 'a', 'e', 'i', 'o', and 'u').
function countVowels(str) {
    let seplitcount = str.split('');
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
  
    for (const i of seplitcount) {
      if (vowels.includes(i.toLowerCase())) {
        count++;
      }
    }
  
    return count;
  }
  
  console.log(countVowels("Hello, how are you?")); 
  
// Expected Output: 7