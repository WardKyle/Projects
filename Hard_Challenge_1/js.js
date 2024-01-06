// JavaScript Question (Hard):
// Write a JavaScript function that takes two strings, s1 and s2, and returns the minimum window substring in s1 which will contain all the characters in s2. If there is no such substring, return an empty string.
// For example:
// Given s1 = "ADOBECODEBANC" and s2 = "ABC", the function should return "BANC", as it's the smallest substring of s1 that contains all the characters in s2.
// Given s1 = "a" and s2 = "aa", the function should return an empty string, since s2 cannot be formed from s1.
// This problem tests your ability to implement a solution using the sliding window technique along with efficient string manipulation.

const s1 = "ADOBECODEBANC";
const s2 = "ABC";
const substrings = [];

function minString(param1, param2){
  if (param1.length < param2.length) console.log([]);
  arr1 = param1.split("");
  arr2 = param2.split("");
  if (!arr2.every((el) => arr1.includes(el))) console.log([]);
  arr1.forEach((el,index) => {
    if (arr2.includes(el) && index < arr1.length - 2){
      arr1copy = arr1.slice(index+1);
      arr2copy = arr2.filter((letter) => letter != el);
      if (arr2copy.every(letter => arr1copy.includes(letter))){
        const copyindex = arr2copy.map(letter => arr1copy.indexOf(letter)+index+1);
        substrings.push([index, Math.max(...copyindex)]);
      }
    }
  });
  if (substrings != ""){
    const str = substrings.map(arr => arr1.slice(arr[0],arr[1]+1));
    const leng = substrings.map(arr => arr[1]-arr[0]);
    console.log(str[leng.sort()[0]].join(''));
  }
}

minString(s1,s2);