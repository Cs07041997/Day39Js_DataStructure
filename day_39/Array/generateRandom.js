let randomNumbers =[];
for (let i = 0 ; i<10 ;i++){
    randomNumbers[i] = Math.floor(Math.random()*889)+100;
}
console.log(randomNumbers);

let largestNumber = 0;
let secLargestNumber = 0;
for (let i = 0 ; i< randomNumbers.length ; i++){

    if (largestNumber < randomNumbers[i]){
        secLargestNumber = largestNumber;
        largestNumber = randomNumbers[i];
    }
    else{
        secLargestNumber = randomNumbers[i];
    }
}
console.log(secLargestNumber);
