let randomNumbers =[];
for (let i = 0 ; i<10 ;i++){
    randomNumbers[i] = Math.floor(Math.random()*889)+100;
}
console.log(randomNumbers);

console.log(randomNumbers.sort());
console.log(`the second largest numbe is ${randomNumbers[8]}`);