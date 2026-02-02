// let a =10;
// let b=12;
// let c=40;
// if(a>b&&a>c)
// {
//     console.log("a is big");
// }
// else if(b>a&&b>c)
// {
//     console.log("b is big");
// }
// else
//     {
//     console.log("c is big");
// }

function say(a1,b1=8,c1) {
  let a = a1;
  var b = b1;
  const c = c1;
  console.log(a);
  return c;
  console.log(b);
  console.log(c);
  
}
// say(5,5,5); // call by value
// say(6, 6, 6);  // call by value
console.log(say(6,6,6));
