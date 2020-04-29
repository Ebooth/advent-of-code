import {readFileSync } from 'fs';

const file = readFileSync("./input.txt").toString().trim()
const input = file.split(',').map(el => parseInt(el, 10))





function test(data){
    const input = [...data]
    function op(readIndex){
        let opNum = input[readIndex];
        if(opNum ===1){
            let firstIndex = input[readIndex + 1]
            let secondIndex = input[readIndex + 2]
            let thirdIndex = input[readIndex + 3]
            input[thirdIndex] = input[firstIndex] + input[secondIndex]
        }
        else if (opNum === 2){
            let firstIndex = input[readIndex + 1]
            let secondIndex = input[readIndex + 2]
            let thirdIndex = input[readIndex + 3]
            input[thirdIndex] = input[firstIndex] * input[secondIndex]
        }
        else if (opNum === 99){
            return true;
        }
    }

    let readIndex = 0;
    while (!op(readIndex)){
        readIndex += 4;
    }
    return input

}

test([1,0,0,0,99])
test([2,3,0,3,99])

console.log(test([1,1,1,4,99,5,6,0,99]))



console.log(test(input)[0])


function testInput(input, a,b){
    const data = [...input]
    data[1]=a;
    data[2]=b;
    return test(data)[0]
}

for (let i = 1; i <= 99; i++){
    for (let j = 1; j <= 99; j++){
        //console.log(i,j, testInput(input, i,j))
        if(testInput(input, i,j) === 19690720){
            console.log(i,j)
            console.log(100*i + j)
        }
    }
}

