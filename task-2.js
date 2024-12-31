const numbers = [12, 98, 5, 41, 23, 78, 46];
let even=[];
for(let arr of numbers){
    if(arr%2===0){
        even.push(arr);
    }
}
console.log(even);