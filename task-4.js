// const statement = 'I am a hard working person';
// const a = statement.split(' ').reverse().join(" ");

// console.log(a);
let statement = 'I am a hard working person';
let a = statement.split(' ');
let result =[];
for(let arr of a){
    result.unshift(arr);
}

console.log(result.join(" "));


// const input = "capitalize every first letter of each word in a string";

// const result = input.split(' ').map(function (word) {
//         return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
//     })
//     .join(' ');

// console.log(result);