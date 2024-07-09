// Write a JavaScript function to generate a random password of a given length.
function generatePassword(input){
    let pass=''
    let numbers='0123456789';
    let str='abceefghijklmnopqrstuvwxyz';
    let chracter='!@#$%^&*()">?<'
    str+=numbers;
    str+=chracter
    for (let index = 0; index < input; index++) {
        let code = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(code);
    }
    console.log(pass)
}
 generatePassword(9) 
 
// Expected Output: "a1H#7zB@"
// Write a JavaScript function to find the sum of digits in a number.
function digits(num){
    let sum = 0;
    let add = num.split('');
    for (let i=0;i<add.length;i++){

        sum+=parseInt(add[i])
    }
    return sum
}
console.log(digits('123456')) 

 function numbers(num) {
    let newNum=num.toString()
    let sum = 0;

    for (let i=0;i<=newNum.length;i++){
        sum+=i
    }
    return sum
}
 console.log(numbers(12345)) 
//  Write a JavaScript function to find the longest word in a sentence.
function findLongestWord(sentence) {
    let words = sentence.split(' ');

    let longestWord = '';

    for (let i = 0; i < words.length; i++) {
        // If the current word is longer than the longestWord, update longestWord
        if (words[i].length > longestWord.length ) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); 
// Write a JavaScript function to truncate a string up to a given length and add "..." if it exceeds.
function truncateString(str,num){
    if(str.length<=num){
        return str
    }
    return str.slice(0,num)+'...' 
}
console.log(truncateString("Hello, how are you?", 10)) 
// Expected Output: "Hello, how..."


  
//   Write a JavaScript function to sort an array of objects by a specific property.
function sortObjects(obj,prop){
   return obj.sort((a,b)=>{
        if(a[prop]<b[prop]){
            return -1
        }
        if(a[prop]>b[prop]){
            return 1
        }
        return 0
    })
}
let obj=sortObjects([{name: "John", age: 25}, {name: "Jane", age: 30}], "age")
console.log(obj) 
// Expected Output: [{name: "John", age: 25}, {name: "Jane", age: 30}]


  
