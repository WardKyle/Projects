// JavaScript Question (Advanced):
// Write a JavaScript function that finds all the unique quadruplets [a, b, c, d] in an array of integers, such that a + b + c + d = target. The solution set must not contain duplicate quadruplets.
// For example:
// Given the array [1, 0, -1, 0, -2, 2] and a target of 0, the function should return [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]].
// This problem is a variation of the classic 4-sum problem and tests your ability to handle multiple pointers and optimize for performance to avoid unnecessary calculations. You might consider sorting the array as a starting point and think about how you can reduce the problem to a series of 2-sum or 3-sum problems. 

function quadruplets(p1,p2){
  const quads = [];
  const found = [];
  for (let i=0;i<p1.length-3;i++){
    for (let k=i+1;k<p1.length-2;k++){
      for (let m=k+1;m<p1.length-1;m++){
        for(let n=m+1;n<p1.length;n++){
          quads.push([p1[i],p1[k],p1[m],p1[n]]);
        }
      }
    }
  }
  for (let el of quads){
    if (el.reduce((sum,a) => sum+a,0)==p2){
      found.push(el);
    }
  }
  const unique = new Set(found.map(el => JSON.stringify(el)));
  return unique;
}

const arr = [1, 0, -1, 0, -2, 2];
const target = 0;
console.log(quadruplets(arr,target));