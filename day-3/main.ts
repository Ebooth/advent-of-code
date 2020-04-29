import * as fs from 'fs';

main()

function main(){
    const fileContent = fs.readFileSync('./input.txt').toString();
    let [wire1, wire2] = fileContent.split('\n').map(wire => wire.split(','));
    const path1 = getPathPoints(wire1)
    const path2 = getPathPoints(wire2)
    const interceptionPoints = getInterceptionPoints(path1, path2)
    console.log(interceptionPoints)
    const dist = getMin(interceptionPoints)
    console.log(dist)
}


function test(){
    let wire1 = "R75,D30,R83,U83,L12,D49,R71,U7,L72".split(",")
    let wire2 = "U62,R66,U55,R34,D71,R55,D58,R83".split(",")
    const path1 = getPathPoints(wire1)
    const path2 = getPathPoints(wire2)
    const interceptionPoints = getInterceptionPoints(path1, path2)
console.log(interceptionPoints)
const dist = getMin(interceptionPoints)
console.log(dist)
}
function getMin(points){
    return Math.min(...points.map(pt => pt.nbSteps))
}
function getClosestDistance(points){
    const distances = points.map(point => Math.abs(point.x) + Math.abs(point.y))
    return Math.min(...distances)
}
function getInterceptionPoints(path1, path2){
    return path1.filter(point1 => {
        let match = path2.find(point2 => point1.x === point2.x && point1.y === point2.y)
        if(match){
            point1.nbSteps += match.nbSteps;
            return true;
        }
    })
}


function getPathPoints(wire){
    const points = [];

    const currentPos = {x: 0, y:0, nbSteps: 0}
    for(let op of wire){
        let dir = op.charAt(0);
        let num = parseInt(op.slice(1),10)
       
        switch(dir){
            case 'U':
                for(let i = 1; i <= num; i++){
                    currentPos.nbSteps += 1
                    currentPos.y += 1
                    points.push({...currentPos})
                }
                
                break;
            case 'R':

                for(let i = 1; i <= num; i++){
                    currentPos.nbSteps += 1
                    currentPos.x += 1
                    points.push({...currentPos})
                }
                break;
            case 'D':

                for(let i = 1; i <= num; i++){
                    currentPos.nbSteps += 1
                    currentPos.y -= 1
                    points.push({...currentPos})
                }
                break;
            case 'L':
                for(let i = 1; i <= num; i++){
                    currentPos.nbSteps += 1
                    currentPos.x -= 1
                    points.push({...currentPos})
                }
                break;
        }
      
    }
    return points;
}

