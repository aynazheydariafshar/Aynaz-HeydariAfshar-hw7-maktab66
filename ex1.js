function Lesson(className , classUnit , classCapacity){
    this.className = className
    this.classUnit = classUnit
    this.classCapacity = classCapacity
}

const softEngineeringClass = new Lesson("softEgineering" , 3 , 50)
const networkClass = new Lesson("network" , 3 , 30)

softEngineeringClass.project = true
networkClass.book = true

let softEngineeringJson = JSON.stringify(softEngineeringClass)
let networkJson = JSON.stringify(networkClass)

console.log(JSON.parse(softEngineeringJson))
console.log(JSON.parse(networkJson))