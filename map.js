// function add(_,a){
//     console.log(a);
// }
// add(1,3,5);


const arr = [1,2,3,4,5];
console.log("with map");
const result = arr.map((e) =>{
     return e+2;
} );
console.log(result);
console.log(arr)
//create a new array
//newarray.length = original.length


// console.log("with forEach");
// const result1 = arr.forEach( (e) => {
//     return e;
// } )
// console.log(result1);
//af(current element , current_index, array);