// Write a JavaScript function to find the GCD (Greatest Common Divisor) of two numbers using Euclid's algorithm.
function findGCD(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        let c = b;
        b = a % b;
        a = c;
    }
    return a;
}
// Expected Output: 5
// Input: findGCD(24, 36)
// Expected Output: 12

console.log(findGCD(24, 36)); // Output: 12
// Write a JavaScript function to remove falsy values (false, null, 0, "", undefined, and NaN) from an array.
function removeFalsyValues(arrr){
    let new_array=[ ]
    for(let i=0;i<arrr.length;i++){
        if(!arrr[i]===false){
            new_array.push(arrr[i])
        }
    }
    return new_array

}

 console.log(removeFalsyValues([0, 1, false, true, "", "hello", null, undefined, NaN]))
// Expected Output: [1, true, "hello"]
// Write a JavaScript function to find the median of an array of numbers.

// Input: findMedian([3, 1, 7, 4, 2])
// Expected Output: 3
// Write a JavaScript function to find the most frequent element in an array.

 function mostFrequentElement(arr){
    const count = {};

for (let ele of arr) {
    if (count[ele]) {
        count[ele] += 1;
    } else {
        count[ele] = 1;
    }
}

let maxKey = '';
let maxCount = 0;

for (let key in count) {
    if (count[key] > maxCount) {
        maxCount = count[key];
        maxKey = key;
    }
}
return maxKey
}
console.log(mostFrequentElement([3, 1, 5, 3, 2, 1, 5, 5, 4]))


//  mostFrequentElement([3, 1, 5, 3, 2, 1, 5, 5, 4])
// Expected Output: 5 const count = {};
// Write a JavaScript function to reverse words in a sentence without reversing the characters of each word.
function reverseWords(str){
    let words=str.split(' ')
    // console.log(words)
   console.log(words.reverse().join(' ')) 

}
reverseWords("Hello, how are you?")
// Expected Output: "you? are how Hello,"

function findMedian(arr) {
    arr.sort((a, b) => a - b);
    const middleIndex = Math.floor(arr.length / 2);
// console.log(middleIndex)
    if (arr.length % 2 === 0) {

        return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
    } else {
        return arr[middleIndex];
    }

}

console.log(findMedian([3, 1, 7, 4,2]))

