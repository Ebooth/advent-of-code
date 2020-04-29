import {readFileSync} from 'fs';

const file = readFileSync('./input.txt').toString().trim()
const input = file.split('\n').map(str => parseInt(str, 10))

const fuels = input.map(getFuelFromMass)
const bonusFuels = fuels.map(getBonusFuel)

const total = fuels.reduce((a,b) => a + b) + bonusFuels.reduce((a,b) => a + b)

console.log(total)


function getBonusFuel(fuel){
    const bonus = []
    while(fuel > 0) {
        fuel = getFuelFromMass(fuel)
        if(fuel >= 0)
        bonus.push(fuel)
    }
    return  bonus.reduce((a,b ) => a + b)
}






function getFuelFromMass(mass){
    return Math.floor(mass / 3) - 2;
}