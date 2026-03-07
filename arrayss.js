// const arr=[1,2,3];//1001
// //0 n
// // arr=[5,6,7];//1002
// arr[0]=5;
// console.log(arr);
// //[Ift4f@


const arr=[1,2,3,4];
arr.push(5);
console.log(arr);
//[1,2,3,4,5]
arr.pop();
console.log(arr);
//[1,2,3,4]
arr.shift();
console.log(arr);
//[2,3,4]
arr.unshift(1);
console.log(arr);
//[1,2,3,4]

console.log(arr.indexOf(7));
console.log(arr.includes(7));

console.log(arr.join(" , "));

const arr3=[45,46,23,86,97]
console.log(arr.reverse());
console.log(arr3.sort());

console.log(arr3.slice(1,4));
//[ 23, 45, 46, 86, 97 ] 
console.log(arr3.splice(1,2,3,4,5,6));
console.log(arr3);
//23,3,4,5,6,86,97


