// Write a JavaScript function to calculate the area of a circle given its radius.
function circleArea(radius){
    const pi=Math.PI
    let area=pi*Math.pow(radius,2)
    
    return area
}
 console.log(circleArea(5)) 
//  Write a JavaScript function to find the second smallest element in an array.
function findSecondSmallest(array) {
    array.sort((a, b) => a - b);
    return array[1];
}

let res = findSecondSmallest([3, 1, 7, 4, 2]);
console.log(res); // Output: 2
// Write a JavaScript function to check if a string is an anagram of another string.
function areAnagram(str1,str2)
{
    str1=str1.trim()
    str2=str2.trim()
   if(str1.length!==str2.length){
    return false
   }
    str1 = str1.split('').sort().join('')
    str2 = str2.split('').sort().join('')
    // split har character ko seprate kry ga 
    // sort ya chracters ko alphabatical karta ha 
    // join sort keay hove chracter ko jorta ha
    return str1 === str2
}
     
console.log(areAnagram("listen", " islent"))
 function intersection(array1,array2){
    
    let new_array = [];
   for(let i=0;i<array1.length;i++){
    for(j=0;j<array2.length;j++){
        if(array1[i]===array2[j]){
            new_array.push(array1[i])
        }
    }
   }
    return new_array;
 }
// Write a JavaScript function to find the intersection of two arrays.
console.log(intersection([1, 2, 3], [2, 3, 4])
)
intersection([1, 2, 3], [2, 3, 4])
//  Output: [2, 3]
function section(array1,array2){
    let array3=[...array1,...array2]
    return [...new Set(array3)]

}
let result=section([1, 2, 3,2, 3, 4],[3,4,5,6,7])
console.log(result)
// Write a JavaScript function to find the average of an array of numbers.
function findAverage(array){
    let sum=0
    for(let i=0;i<array.length;i++){
        sum+=array[i]
    }
    return sum/array.length
}
let average=findAverage([3, 5, 7, 10])
console.log(average)
// Expected Output: 6.25