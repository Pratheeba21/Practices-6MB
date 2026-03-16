const nums = [1,2,3,4];
// const newarray = nums.map( (_,e) => {
//     if(e%2==0){
//         return e*2;
//     }
//     else{
//         return e*3;
//     }
// } );

// //na =[3, 4,9,8]
// //na = [0,3,4,9]

// function sum(a,b){
//     return a+b;
// }
// const res= sum(5,6);
// console.log(res)

// const sum =(a,b) => a+b; 

// const res2 = nums.forEach((e) => {
//     return e*2;
// })
// console.log(res2);

// const arr =[1,2,3,4];

// arr.map( (e,i) => {
//     console.log("element in position",i,":",e);
//     console.log(`element in position ${i} : ${e}`);
// });

const arr = ["apple","banana","mango"];

arr.map((val,i) => {
    //console.log("Student #",i+1,": ",val);
    console.log(`Student # ${i+1} : ${val}`)
});