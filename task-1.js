const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// let text ="";
let result =[];
for(let arr of colors){
    result.unshift(arr);
}
console.log(result);