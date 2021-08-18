let threeRandomNumbers = [];
for (let j=0 ; ; j++ ){

    for(let i =0 ; i <3 ; i++){
        threeRandomNumbers [i] = Math.floor(Math.random()*9)+1;
    }
    if ((threeRandomNumbers[0] + threeRandomNumbers[1] - threeRandomNumbers[2]) == 0){
        console.log("The 3 number whic has algebric sum zero is "+threeRandomNumbers)
        break;
    }
    else if ((threeRandomNumbers[0] - threeRandomNumbers[1] + threeRandomNumbers[2]) == 0){
        console.log("The 3 number whic has algebric sum zero is "+threeRandomNumbers)
        break;
    }else if ((threeRandomNumbers[0] - threeRandomNumbers[1] - threeRandomNumbers[2]) == 0){
        console.log("The 3 number whic has algebric sum zero is "+threeRandomNumbers)
        break;
    }
}
