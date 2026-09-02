function add(...numbers:number[]){
    return numbers.reduce((a,b) => a + b, 0)

}

let scores: number[] = [85, 42, 111];
let animals: string[] = ["cat", "dog", "spidermonkey"];
let active: boolean[] = [true, true, false];

scores.push(100)
console.log(scores[0])
scores.pop();

for(let i = 0; i < animals.length; i++){
    console.log(animals[i])
}

for(const name of animals){
    console.log(name);
}

// map, filter, find, reduce --LINQ
// map -> changing everything
let doubled:number[] = []
for(let number of scores){
    doubled.push(number*2)
}

let mappedDouble:number[] = scores.map(number=>number*2);

let mappedString:string[] = scores.map(number=> `Number: ${number}`);

for (const name of mappedString){
    console.log(name)
}
